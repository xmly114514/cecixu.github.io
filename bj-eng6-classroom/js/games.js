/* ============================================================
 * 北京版六年级英语 · 课堂游戏站 —— 全部课堂游戏
 * 看图选词 / 听音选词 / 听音拼写 / 职业工装连线 / 记忆翻牌 /
 * 句子拼装 / 单词Bingo / 幸运转盘
 * ============================================================ */

/* ================== 1. 看图选词 ================== */
let picPool = [], picQ = 0, picIdx = 0, picScore = 0, picStreak = 0, picLock = false;
function resetPic() {
  picPool = currentUnit().words.filter(w => w.emoji);
  picQ = Math.min(10, picPool.length);
  picIdx = 0; picScore = 0; picStreak = 0; picLock = false;
  renderPicScore();
  nextPic();
}
function renderPicScore() {
  $('picScore').textContent = '得分 ' + picScore;
  $('picStreak').textContent = '连胜 ' + picStreak;
}
function nextPic() {
  if (picIdx >= picQ) {
    $('picEmoji').textContent = '🏁';
    $('picOptions').innerHTML = '<div class="guide" style="grid-column:1/-1;font-size:22px">本轮结束！得分 ' + picScore +
      '，最高连胜 ' + picStreak + '。点击「重新开始」再来一轮。</div>';
    $('picNext').style.display = 'none';
    return;
  }
  const target = picPool[Math.floor(Math.random() * picPool.length)];
  const dist = shuffle(currentUnit().words.filter(w => w.en !== target.en)).slice(0, 3);
  const opts = shuffle([target, ...dist]);
  $('picEmoji').textContent = target.emoji;
  const box = $('picOptions');
  box.innerHTML = '';
  picLock = false;
  opts.forEach(o => {
    const b = document.createElement('button');
    b.textContent = o.en;
    b.addEventListener('click', () => answerPic(b, o, target));
    box.appendChild(b);
  });
  $('picNext').style.display = '';
}
function answerPic(btn, chosen, target) {
  if (picLock) return;
  picLock = true;
  const all = $('picOptions').querySelectorAll('button');
  all.forEach(x => x.disabled = true);
  if (chosen.en === target.en) {
    btn.classList.add('correct');
    picScore++; picStreak++;
    speak(target.en);
  } else {
    btn.classList.add('wrong');
    picStreak = 0;
    all.forEach(x => { if (x.textContent === target.en) x.classList.add('correct'); });
  }
  renderPicScore();
  setTimeout(() => { picIdx++; nextPic(); }, 1400);
}
$('picNext').addEventListener('click', () => { if (!picLock) { picIdx++; nextPic(); } });
$('picRestart').addEventListener('click', resetPic);

/* ================== 2. 听音选词 ================== */
let lisPool = [], lisQ = 0, lisIdx = 0, lisScore = 0, lisStreak = 0, lisLock = false;
function resetListen() {
  lisPool = currentUnit().words;
  lisQ = Math.min(10, lisPool.length);
  lisIdx = 0; lisScore = 0; lisStreak = 0; lisLock = false;
  renderListenScore();
  nextListen();
}
function renderListenScore() {
  $('listenScore').textContent = '得分 ' + lisScore;
  $('listenStreak').textContent = '连胜 ' + lisStreak;
}
function nextListen() {
  if (lisIdx >= lisQ) {
    $('listenOptions').innerHTML = '<div class="guide" style="grid-column:1/-1;font-size:22px">本轮结束！得分 ' + lisScore +
      '，最高连胜 ' + lisStreak + '。点击「重新开始」再来一轮。</div>';
    $('listenNext').style.display = 'none';
    return;
  }
  const target = lisPool[Math.floor(Math.random() * lisPool.length)];
  const dist = shuffle(lisPool.filter(w => w.en !== target.en)).slice(0, 3);
  const opts = shuffle([target, ...dist]);
  const box = $('listenOptions');
  box.innerHTML = '';
  lisLock = false;
  opts.forEach(o => {
    const b = document.createElement('button');
    b.textContent = o.en;
    b.addEventListener('click', () => answerListen(b, o, target));
    box.appendChild(b);
  });
  $('listenNext').style.display = '';
  setTimeout(() => speak(target.en), 300);
}
function answerListen(btn, chosen, target) {
  if (lisLock) return;
  lisLock = true;
  const all = $('listenOptions').querySelectorAll('button');
  all.forEach(x => x.disabled = true);
  if (chosen.en === target.en) {
    btn.classList.add('correct');
    lisScore++; lisStreak++;
    speak(target.en);
  } else {
    btn.classList.add('wrong');
    lisStreak = 0;
    all.forEach(x => { if (x.textContent === target.en) x.classList.add('correct'); });
  }
  renderListenScore();
  setTimeout(() => { lisIdx++; nextListen(); }, 1400);
}
$('listenPlay').addEventListener('click', () => {
  const cur = lisPool[lisIdx];
  if (cur) speak(cur.en);
});
$('listenNext').addEventListener('click', () => { if (!lisLock) { lisIdx++; nextListen(); } });
$('listenRestart').addEventListener('click', resetListen);

/* ================== 3. 听音拼写 ================== */
let spPool = [], spQ = 0, spIdx = 0, spScore = 0, spAnswer = [], spTarget = null;
function resetSpell() {
  spPool = getSpellableWords(currentUnit().words);
  spQ = Math.min(10, spPool.length);
  spIdx = 0; spScore = 0;
  renderSpellScore();
  nextSpell();
}
function renderSpellScore() { $('spellScore').textContent = '得分 ' + spScore; }
function nextSpell() {
  if (spIdx >= spQ) {
    $('spellEmoji').textContent = '🏁';
    $('spellCn').textContent = '本轮结束！得分 ' + spScore + '，点击「重新开始」再来一轮。';
    $('spellAnswer').innerHTML = '';
    $('spellLetters').innerHTML = '';
    return;
  }
  spTarget = spPool[Math.floor(Math.random() * spPool.length)];
  spAnswer = [];
  $('spellEmoji').textContent = spTarget.emoji || '🔤';
  $('spellCn').textContent = spTarget.cn;
  renderSpellBoard();
  renderSpellLetters();
  setTimeout(() => speak(spTarget.en), 300);
}
function renderSpellBoard() {
  const box = $('spellAnswer');
  box.innerHTML = '';
  spTarget.en.toLowerCase().split('').forEach((ch, i) => {
    const t = document.createElement('span');
    t.className = 'tile';
    t.textContent = spAnswer[i] !== undefined ? spAnswer[i] : '';
    t.style.border = spAnswer[i] !== undefined ? '2px solid var(--primary)' : '';
    box.appendChild(t);
  });
}
function renderSpellLetters() {
  const box = $('spellLetters');
  box.innerHTML = '';
  const remaining = spTarget.en.toLowerCase().split('');
  spAnswer.forEach(ch => {
    const idx = remaining.indexOf(ch);
    if (idx >= 0) remaining.splice(idx, 1);
  });
  shuffle(remaining).forEach(ch => {
    const t = document.createElement('span');
    t.className = 'tile';
    t.textContent = ch;
    t.addEventListener('click', () => {
      if (spAnswer.length >= spTarget.en.length) return;
      spAnswer.push(ch);
      renderSpellBoard();
      renderSpellLetters();
    });
    box.appendChild(t);
  });
}
$('spellPlay').addEventListener('click', () => { if (spTarget) speak(spTarget.en); });
$('spellUndo').addEventListener('click', () => {
  if (spAnswer.length) { spAnswer.pop(); renderSpellBoard(); renderSpellLetters(); }
});
$('spellCheck').addEventListener('click', () => {
  const got = spAnswer.join('');
  if (got === spTarget.en.toLowerCase()) {
    spScore++;
    renderSpellScore();
    flashMsg('spellAnswer', '✅ 太棒了！', true);
    setTimeout(() => { spIdx++; nextSpell(); }, 1200);
  } else {
    flashMsg('spellAnswer', '❌ 再试一次', false);
  }
});
$('spellNext').addEventListener('click', () => { spIdx++; nextSpell(); });
$('spellRestart').addEventListener('click', resetSpell);

/* ================== 4. 职业工装连线（六上 U6） ================== */
let profLeft = [], profRight = [], profSelected = null, profPairs = [];
function resetProf() {
  profPairs = [];
  profSelected = null;
  profLeft = shuffle(PROFESSIONS.map((p, i) => i));
  profRight = shuffle(PROFESSIONS.map((p, i) => i));
  renderProf();
  updateProfScore();
}
function renderProf() {
  const L = $('matchLeft'), R = $('matchRight');
  L.innerHTML = ''; R.innerHTML = '';
  profLeft.forEach(i => {
    const p = PROFESSIONS[i];
    const d = document.createElement('div');
    d.className = 'match-item';
    d.dataset.idx = i;
    d.innerHTML = '<span class="m-emoji">' + p.outfitEmoji + '</span><span>' + p.outfit + '</span>';
    d.addEventListener('click', () => selectProfLeft(d));
    L.appendChild(d);
  });
  profRight.forEach(i => {
    const p = PROFESSIONS[i];
    const d = document.createElement('div');
    d.className = 'match-item';
    d.dataset.idx = i;
    d.innerHTML = '<span class="m-emoji">' + p.person + '</span><span>' + p.job + '<span class="m-cn">' + p.cn + '</span></span>';
    d.addEventListener('click', () => selectProfRight(d));
    R.appendChild(d);
  });
  updateProfLines();
}
function updateProfScore() {
  $('profScore').textContent = '配对 ' + profPairs.length + ' / ' + PROFESSIONS.length;
}
function selectProfLeft(el) {
  if (el.classList.contains('correct')) return;
  document.querySelectorAll('#matchLeft .match-item').forEach(x => x.classList.remove('selected'));
  el.classList.add('selected');
  profSelected = +el.dataset.idx;
  updateProfLines();
}
function selectProfRight(el) {
  if (profSelected === null || el.classList.contains('correct')) return;
  const li = profSelected;
  const ri = +el.dataset.idx;
  document.querySelectorAll('#matchLeft .match-item').forEach(x => x.classList.remove('selected'));
  const lEl = document.querySelector('#matchLeft .match-item[data-idx="' + li + '"]');
  if (li === ri) {
    profPairs.push(li);
    lEl.classList.remove('selected');
    lEl.classList.add('correct');
    el.classList.add('correct');
    speak(PROFESSIONS[li].job);
  } else {
    lEl.classList.add('wrong');
    el.classList.add('wrong');
    setTimeout(() => {
      lEl.classList.remove('wrong');
      el.classList.remove('wrong');
    }, 600);
  }
  profSelected = null;
  updateProfScore();
  updateProfLines();
  if (profPairs.length === PROFESSIONS.length) {
    $('profScore').textContent = '🎉 全部配对成功！';
  }
}
function updateProfLines() {
  const svg = $('matchSvg');
  const wrap = $('match-wrap');
  const wRect = wrap.getBoundingClientRect();
  svg.innerHTML = '';
  profPairs.forEach(i => {
    const a = $('matchLeft').querySelector('[data-idx="' + i + '"]');
    const b = $('matchRight').querySelector('[data-idx="' + i + '"]');
    drawProfLine(svg, wRect, a, b, '#16a34a', 4);
  });
  if (profSelected !== null) {
    const a = $('matchLeft').querySelector('[data-idx="' + profSelected + '"]');
    if (a) drawProfLine(svg, wRect, a, null, '#f59e0b', 2, true);
  }
}
function drawProfLine(svg, wrapRect, a, b, color, width, dashed) {
  const ar = a.getBoundingClientRect();
  const x1 = ar.left - wrapRect.left + ar.width;
  const y1 = ar.top - wrapRect.top + ar.height / 2;
  let x2, y2;
  if (b) {
    const br = b.getBoundingClientRect();
    x2 = br.left - wrapRect.left;
    y2 = br.top - wrapRect.top + br.height / 2;
  } else {
    const wrapWidth = wrapRect.width;
    x2 = wrapWidth - 8;
    y2 = y1;
  }
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1); line.setAttribute('y1', y1);
  line.setAttribute('x2', x2); line.setAttribute('y2', y2);
  line.setAttribute('stroke', color);
  line.setAttribute('stroke-width', width);
  if (dashed) line.setAttribute('stroke-dasharray', '8 6');
  svg.appendChild(line);
}
window.addEventListener('resize', () => { if (typeof updateProfLines === 'function') updateProfLines(); });
$('profSpeakOutfit').addEventListener('click', () => {
  let idx = profSelected;
  if (idx === null) {
    idx = profLeft.find(i => !profPairs.includes(i));
  }
  if (idx !== undefined && idx !== null) speak(PROFESSIONS[idx].outfit);
});
$('profReset').addEventListener('click', resetProf);

/* ================== 5. 记忆翻牌 ================== */
let memCards = [], memOpen = [], memLock = false, memFlips = 0, memMatched = 0;
function resetMemory() {
  const words = pickN(currentUnit().words.filter(w => w.emoji), 6);
  memCards = [];
  words.forEach(w => {
    memCards.push({ kind: 'emoji', word: w.en, show: w.emoji, pair: w.en });
    memCards.push({ kind: 'word', word: w.en, show: w.en, pair: w.en });
  });
  memCards = shuffle(memCards);
  memOpen = []; memLock = false; memFlips = 0; memMatched = 0;
  renderMemory();
}
function renderMemory() {
  const grid = $('memoryGrid');
  grid.innerHTML = '';
  memCards.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'm-card';
    card.dataset.i = i;
    card.innerHTML = '<div class="m-inner"><div class="m-face m-back">❓</div><div class="m-face m-front">' + c.show + '</div></div>';
    card.addEventListener('click', () => flipMemory(i));
    grid.appendChild(card);
  });
  updateMemInfo();
}
function updateMemInfo() {
  $('memInfo').textContent = '翻开 ' + memFlips + ' 次 · 配对 ' + memMatched + '/6';
}
function flipMemory(i) {
  if (memLock) return;
  const card = document.querySelectorAll('.m-card')[i];
  if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
  card.classList.add('flipped');
  memOpen.push(i);
  if (memOpen.length === 2) {
    memFlips++;
    memLock = true;
    const [a, b] = memOpen;
    const ca = memCards[a], cb = memCards[b];
    if (ca.pair === cb.pair) {
      memMatched++;
      document.querySelectorAll('.m-card')[a].classList.add('matched');
      document.querySelectorAll('.m-card')[b].classList.add('matched');
      speak(ca.word);
      memOpen = [];
      memLock = false;
      updateMemInfo();
      if (memMatched === 6) {
        $('memInfo').textContent = '🎉 全部配对成功！用了 ' + memFlips + ' 次翻开';
      }
    } else {
      setTimeout(() => {
        document.querySelectorAll('.m-card')[a].classList.remove('flipped');
        document.querySelectorAll('.m-card')[b].classList.remove('flipped');
        memOpen = [];
        memLock = false;
      }, 900);
      updateMemInfo();
    }
  }
}
$('memNew').addEventListener('click', resetMemory);
$('memFlipAll').addEventListener('click', () => {
  const cards = document.querySelectorAll('.m-card');
  cards.forEach(c => c.classList.add('flipped'));
  setTimeout(() => cards.forEach(c => { if (!c.classList.contains('matched')) c.classList.remove('flipped'); }), 3000);
});

/* ================== 6. 句子拼装 ================== */
let senPool = [], senQ = 0, senIdx = 0, senScore = 0, senTarget = [], senAnswer = [];
function resetSentence() {
  senPool = currentUnit().sentences.filter(s => s.en.split(/\s+/).length <= 9);
  senQ = Math.min(10, senPool.length);
  senIdx = 0; senScore = 0;
  renderSenScore();
  nextSentence();
}
function renderSenScore() { $('senScore').textContent = '完成 ' + senScore + ' / ' + senQ; }
function tokenize(sen) {
  return sen.split(/\s+/).map(t => t.replace(/[.,!?;:，。！？；：]/g, '')).filter(Boolean);
}
function nextSentence() {
  if (senIdx >= senQ) {
    $('senCn').textContent = '🏁 本轮完成！做对了 ' + senScore + ' 句。点击「重新开始」再来一轮。';
    $('senAnswer').innerHTML = '';
    $('senChips').innerHTML = '';
    return;
  }
  const s = senPool[Math.floor(Math.random() * senPool.length)];
  senTarget = tokenize(s.en);
  senAnswer = [];
  $('senCn').textContent = s.cn;
  renderSenBoard();
  renderSenChips();
}
function renderSenBoard() {
  const box = $('senAnswer');
  box.innerHTML = '';
  senTarget.forEach((w, i) => {
    const t = document.createElement('span');
    t.className = 'tile';
    t.textContent = senAnswer[i] !== undefined ? senAnswer[i] : '　';
    t.style.border = senAnswer[i] !== undefined ? '2px solid var(--primary)' : '';
    box.appendChild(t);
  });
}
function renderSenChips() {
  const box = $('senChips');
  box.innerHTML = '';
  const remaining = senTarget.slice();
  senAnswer.forEach(w => {
    const idx = remaining.indexOf(w);
    if (idx >= 0) remaining.splice(idx, 1);
  });
  shuffle(remaining).forEach(w => {
    const t = document.createElement('span');
    t.className = 'tile';
    t.textContent = w;
    t.addEventListener('click', () => {
      if (senAnswer.length >= senTarget.length) return;
      senAnswer.push(w);
      renderSenBoard();
      renderSenChips();
    });
    box.appendChild(t);
  });
}
$('senUndo').addEventListener('click', () => {
  if (senAnswer.length) { senAnswer.pop(); renderSenBoard(); renderSenChips(); }
});
$('senCheck').addEventListener('click', () => {
  if (senAnswer.join(' ') === senTarget.join(' ')) {
    senScore++;
    renderSenScore();
    speak(senTarget.join(' '));
    flashMsg('senAnswer', '✅ 正确！', true);
    setTimeout(() => { senIdx++; nextSentence(); }, 1300);
  } else {
    flashMsg('senAnswer', '❌ 再排一排', false);
  }
});
$('senNext').addEventListener('click', () => { senIdx++; nextSentence(); });
$('senRestart').addEventListener('click', resetSentence);
$('senSpeak').addEventListener('click', () => { if (senTarget.length) speak(senTarget.join(' ')); });

/* ================== 7. 单词 Bingo ================== */
let bingoWords = [], bingoSel = {}, bingoGridWords = [], bingoCalled = [], bingoGridSize = 4;
let bingoPrintArea = null;
function initBingo() {
  const top = document.querySelector('.bingo-top');
  const lab = document.createElement('label');
  lab.style.cssText = 'display:flex;align-items:center;gap:8px;font-weight:700;font-size:15px';
  lab.innerHTML = '打印份数 <select id="bingoCount"><option>1</option><option>2</option><option>3</option><option>4</option><option>6</option></select>';
  top.appendChild(lab);
  bingoPrintArea = document.createElement('div');
  bingoPrintArea.id = 'bingoPrintArea';
  document.body.appendChild(bingoPrintArea);
}
function resetBingo() {
  bingoWords = currentUnit().words.slice();
  bingoGridSize = bingoWords.length >= 16 ? 4 : (bingoWords.length >= 9 ? 3 : 2);
  bingoGridWords = pickN(bingoWords, bingoGridSize * bingoGridSize);
  bingoSel = {};
  bingoCalled = [];
  renderBingo();
  renderBingoCurrent('点击「抽一个词」开始');
  renderBingoHistory();
}
function renderBingo() {
  const grid = $('bingoGrid');
  grid.innerHTML = '';
  bingoGridWords.forEach((w, i) => {
    const c = document.createElement('div');
    c.className = 'bingo-cell';
    c.dataset.i = i;
    c.innerHTML = '<span class="b-emoji">' + (w.emoji || '🔤') + '</span>' + w.en;
    c.addEventListener('click', () => {
      bingoSel[i] = !bingoSel[i];
      c.classList.toggle('marked', !!bingoSel[i]);
    });
    grid.appendChild(c);
  });
  $('bingoCalled').textContent = '已抽 ' + bingoCalled.length + ' 词';
}
function renderBingoCurrent(html) { $('bingoCurrent').innerHTML = html; }
function renderBingoHistory() {
  $('bingoHistory').innerHTML = bingoCalled.map(w =>
    '<span class="his-word" data-w="' + w.en + '">' + (w.emoji || '') + ' ' + w.en + '</span>'
  ).join('');
  $('bingoHistory').querySelectorAll('.his-word').forEach(el => {
    el.addEventListener('click', () => speak(el.dataset.w));
  });
}
function callBingo() {
  const uncalled = bingoWords.filter(w => !bingoCalled.includes(w));
  let w;
  if (uncalled.length === 0) {
    bingoCalled = [];
    w = bingoWords[Math.floor(Math.random() * bingoWords.length)];
  } else {
    w = uncalled[Math.floor(Math.random() * uncalled.length)];
  }
  bingoCalled.push(w);
  renderBingoCurrent('<span class="bc-emoji">' + (w.emoji || '🔤') + '</span><span>' + w.en + '</span>');
  $('bingoCalled').textContent = '已抽 ' + bingoCalled.length + ' 词';
  renderBingoHistory();
  speak(w.en);
  setTimeout(() => {
    renderBingoCurrent('<span class="bc-emoji">' + (w.emoji || '🔤') + '</span><span>________</span>');
  }, 3500);
}
$('bingoCall').addEventListener('click', callBingo);
$('bingoSpeakLast').addEventListener('click', () => {
  if (bingoCalled.length) speak(bingoCalled[bingoCalled.length - 1].en);
});
$('bingoReset').addEventListener('click', resetBingo);
$('bingoPrint').addEventListener('click', () => {
  const n = +$('bingoCount').value;
  bingoPrintArea.innerHTML = '';
  for (let k = 0; k < n; k++) {
    const card = document.createElement('div');
    card.className = 'bcard';
    card.innerHTML = '<div class="bcard-title">' + BOOKS[currentBook].title + ' · ' + currentUnit().name + ' BINGO</div>' +
      '<div class="bingo-grid pgrid">' +
      pickN(bingoWords, bingoGridSize * bingoGridSize).map(w =>
        '<div class="bingo-cell pcell"><span class="b-emoji">' + (w.emoji || '🔤') + '</span>' + w.en + '</div>'
      ).join('') +
      '</div>';
    bingoPrintArea.appendChild(card);
  }
  window.print();
});

/* ================== 8. 幸运转盘 ================== */
let wheelWords = [], wheelAngle = 0, wheelSpinning = false, wheelWinner = null, wheelFast = false;
function buildWheel() {
  wheelWords = currentUnit().words.slice(0, 12);
  wheelWinner = null;
  const svg = $('wheelSvg');
  svg.innerHTML = '';
  const n = wheelWords.length;
  const cx = 200, cy = 200, r = 190;
  const colors = ['#2563eb', '#16a34a', '#ea580c', '#7c3aed', '#0891b2', '#db2777',
                  '#ca8a04', '#4f46e5', '#059669', '#dc2626', '#d97706', '#0d9488'];
  const seg = 360 / n;
  wheelWords.forEach((w, i) => {
    const a0 = ((-90 + i * seg) * Math.PI) / 180;
    const a1 = ((-90 + (i + 1) * seg) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(a0), y1 = cy + r * Math.sin(a0);
    const x2 = cx + r * Math.cos(a1), y2 = cy + r * Math.sin(a1);
    const large = seg > 180 ? 1 : 0;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M ' + cx + ' ' + cy + ' L ' + x1 + ' ' + y1 + ' A ' + r + ' ' + r + ' 0 ' + large + ' 1 ' + x2 + ' ' + y2 + ' Z');
    path.setAttribute('fill', colors[i % colors.length]);
    path.setAttribute('stroke', '#fff');
    path.setAttribute('stroke-width', '2');
    svg.appendChild(path);

    const midDeg = -90 + (i + 0.5) * seg;
    const midRad = (midDeg * Math.PI) / 180;
    const tx = cx + 112 * Math.cos(midRad), ty = cy + 112 * Math.sin(midRad);
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', tx); text.setAttribute('y', ty);
    text.setAttribute('transform', 'rotate(' + (midDeg + 90) + ' ' + tx + ' ' + ty + ')');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('fill', '#fff');
    text.setAttribute('font-size', w.en.length > 9 ? 15 : 19);
    text.setAttribute('font-weight', '700');
    text.textContent = w.en;
    svg.appendChild(text);

    const ex = cx + 163 * Math.cos(midRad), ey = cy + 163 * Math.sin(midRad);
    const em = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    em.setAttribute('x', ex); em.setAttribute('y', ey);
    em.setAttribute('text-anchor', 'middle');
    em.setAttribute('dominant-baseline', 'middle');
    em.setAttribute('font-size', '26');
    em.textContent = w.emoji || '🔤';
    svg.appendChild(em);
  });
  const hub = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  hub.setAttribute('cx', cx); hub.setAttribute('cy', cy); hub.setAttribute('r', '26');
  hub.setAttribute('fill', '#fff');
  hub.setAttribute('stroke', '#e2e8f0');
  hub.setAttribute('stroke-width', '3');
  svg.appendChild(hub);
}
function spinWheel() {
  if (wheelSpinning) return;
  wheelSpinning = true;
  wheelWinner = null;
  const svg = $('wheelSvg');
  const dur = wheelFast ? 2.5 : 5;
  svg.style.transition = 'transform ' + dur + 's cubic-bezier(.15, .7, .1, 1)';
  const n = wheelWords.length;
  const extra = 360 * (wheelFast ? 3 : 6) + Math.floor(Math.random() * 360);
  wheelAngle += extra;
  svg.style.transform = 'rotate(' + wheelAngle + 'deg)';
  setTimeout(() => {
    const seg = 360 / n;
    const t = ((-90 - wheelAngle) % 360 + 360) % 360;
    const idx = Math.floor(t / seg) % n;
    wheelWinner = wheelWords[idx];
    wheelSpinning = false;
    $('wheelResult').innerHTML = (wheelWinner.emoji || '') + ' ' + wheelWinner.en + '　' + wheelWinner.cn;
    speak(wheelWinner.en);
  }, dur * 1000 + 100);
}
$('wheelSpin').addEventListener('click', spinWheel);
$('wheelSpeak').addEventListener('click', () => { if (wheelWinner) speak(wheelWinner.en); });
$('wheelSpeed').addEventListener('click', () => {
  wheelFast = !wheelFast;
  $('wheelSpeed').textContent = wheelFast ? '⚡ 快速模式' : '⏱️ 慢速模式';
});

/* ================== 公共：单元切换时重置全部游戏 ================== */
function resetAllGames() {
  resetPic();
  resetListen();
  resetSpell();
  resetProf();
  resetMemory();
  resetSentence();
  resetBingo();
  buildWheel();
}

/* ================== 工具：短暂提示 ================== */
function flashMsg(areaId, msg, ok) {
  const area = $(areaId);
  const old = area.innerHTML;
  area.innerHTML = '<div class="guide" style="text-align:center;font-size:26px;color:' + (ok ? 'var(--green)' : 'var(--red)') + '">' + msg + '</div>';
  setTimeout(() => { area.innerHTML = old; }, 1100);
}

/* ================== 初始化 ================== */
initBingo();
resetAllGames();
