/* ============================================================
 * 北京版六年级英语 · 课堂游戏站 —— 核心逻辑
 * 含：TTS 朗读、册别/单元切换、单词闪卡、句型卡
 * ============================================================ */

/* ---------------- TTS 朗读助手（浏览器内置，无依赖） ---------------- */
let enVoice = null;
function pickVoice() {
  if (!('speechSynthesis' in window)) return;
  const voices = speechSynthesis.getVoices();
  enVoice = voices.find(v => /^en[-_]/i.test(v.lang)) || null;
}
if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function speak(text, rate) {
  if (!('speechSynthesis' in window)) {
    alert('当前浏览器不支持语音朗读，请使用 Chrome / Edge 浏览器。');
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  if (enVoice) u.voice = enVoice;
  u.rate = rate || 0.85;
  u.pitch = 1;
  speechSynthesis.speak(u);
}

/* ---------------- 工具函数 ---------------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickN(arr, n) {
  const a = shuffle(arr);
  return a.slice(0, n);
}
function $(id) { return document.getElementById(id); }

/* ---------------- 全局状态 ---------------- */
let currentBook = 'up';
let currentUnitIdx = 0;

function currentUnit() {
  return BOOKS[currentBook].units[currentUnitIdx];
}

/* ---------------- 册别 / 单元选择器 ---------------- */
function renderBookSelect() {
  const sel = $('bookSel');
  sel.innerHTML = '';
  ['up', 'down'].forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = BOOKS[key].title;
    sel.appendChild(opt);
  });
  sel.value = currentBook;
}
function renderUnitSelect() {
  const sel = $('unitSel');
  sel.innerHTML = '';
  BOOKS[currentBook].units.forEach((u, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = u.icon + ' ' + u.name;
    sel.appendChild(opt);
  });
  sel.value = currentUnitIdx;
}
$('bookSel').addEventListener('change', e => {
  currentBook = e.target.value;
  currentUnitIdx = 0;
  renderUnitSelect();
  onUnitChanged();
});
$('unitSel').addEventListener('change', e => {
  currentUnitIdx = +e.target.value;
  onUnitChanged();
});

/* 单元切换后：刷新单词卡、句型卡，并重置所有游戏 */
function onUnitChanged() {
  resetFlash();
  renderSentenceCards();
  if (typeof resetAllGames === 'function') resetAllGames();
}

/* ---------------- 单词闪卡 ---------------- */
let flashList = [];
let flashIdx = 0;
function resetFlash() {
  flashList = currentUnit().words.slice();
  flashIdx = 0;
  renderFlash();
}
function renderFlash() {
  const w = flashList[flashIdx];
  const hide = $('hideEn').checked;
  $('fcEmoji').textContent = w.emoji || '🔤';
  $('fcEn').textContent = hide ? '• • •' : w.en;
  $('fcEn').style.letterSpacing = hide ? '6px' : '1px';
  $('fcPh').textContent = w.ph || '';
  $('fcCn').textContent = w.cn;
  $('flashPos').textContent = (flashIdx + 1) + ' / ' + flashList.length;
}
$('flashPrev').addEventListener('click', () => {
  flashIdx = (flashIdx - 1 + flashList.length) % flashList.length;
  renderFlash();
});
$('flashNext').addEventListener('click', () => {
  flashIdx = (flashIdx + 1) % flashList.length;
  renderFlash();
});
$('flashShuffle').addEventListener('click', () => {
  flashList = shuffle(flashList);
  flashIdx = 0;
  renderFlash();
});
$('flashSpeak').addEventListener('click', () => {
  const w = flashList[flashIdx];
  if (w) speak(w.en);
});
$('hideEn').addEventListener('change', renderFlash);

/* ---------------- 本单元核心句型卡 ---------------- */
function renderSentenceCards() {
  const box = $('sentenceCards');
  const list = currentUnit().sentences;
  if (!list.length) {
    box.innerHTML = '<p class="guide">本单元暂未录入句型。</p>';
    return;
  }
  box.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'sen-list';
  list.forEach(s => {
    const item = document.createElement('div');
    item.className = 'sen-item';
    item.innerHTML =
      '<div><div class="sen-en">' + s.en + '</div><div class="sen-cn2">' + s.cn + '</div></div>' +
      '<button class="speak-btn" title="朗读">🔊</button>';
    item.querySelector('.speak-btn').addEventListener('click', () => speak(s.en));
    grid.appendChild(item);
  });
  box.appendChild(grid);
}

/* ---------------- 页签切换 ---------------- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    $('panel-' + btn.dataset.tab).classList.add('active');
  });
});

/* ---------------- 初始化 ---------------- */
renderBookSelect();
renderUnitSelect();
resetFlash();
renderSentenceCards();
if (typeof resetAllGames === 'function') resetAllGames();
