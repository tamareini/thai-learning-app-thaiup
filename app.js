// ✅ AUDIO
function speak(text, speed=0.9){
  let u=new SpeechSynthesisUtterance(text);
  u.lang='th-TH';
  u.rate=speed;
  speechSynthesis.cancel();
  setTimeout(()=>speechSynthesis.speak(u),50);
}

// ✅ MENU
function menu(){
  document.getElementById('app').innerHTML=`
    <header>Thai Up 🇹🇭</header>
    <div class="menu">
      <button onclick="showCategories()">📚 Words (${getWordsCount()} total)</button>
      <button onclick="showDifficulty()">⭐ By Level</button>
      <button onclick="flashcards()">🧠 Flashcards</button>
    </div>
  `;
}

// ✅ CATEGORIES
function showCategories(){
  let h = '<button onclick="menu()" style="margin:15px;background:#EA580C;color:white;">← Back</button><div class="menu">';
  for(let cat in vocabularyDB) {
    let count = vocabularyDB[cat].words.length;
    h += `<button onclick="showWords('${cat}')">${vocabularyDB[cat].name} (${count})</button>`;
  }
  document.getElementById('app').innerHTML = h + '</div>';
}

// ✅ DIFFICULTY FILTER
function showDifficulty(){
  document.getElementById('app').innerHTML=`
    <div class="menu">
      <button onclick="showWordsByLevel('beginner')">🟢 Beginner (${getWordsByDifficulty('beginner').length})</button>
      <button onclick="showWordsByLevel('intermediate')">🟡 Intermediate (${getWordsByDifficulty('intermediate').length})</button>
      <button onclick="showWordsByLevel('advanced')">🔴 Advanced (${getWordsByDifficulty('advanced').length})</button>
      <button onclick="menu()">← Back</button>
    </div>
  `;
}

function showWordsByLevel(level){
  let words = getWordsByDifficulty(level);
  let h = `<button onclick="showDifficulty()" style="margin:15px;background:#EA580C;color:white;">← Back</button><div class="grid">`;
  words.forEach(w => {
    h += `
      <div class="card">
        <b style="font-size:24px">${w.thai}</b><br>
        <small>${w.p}</small><br>
        <span style="color:#EA580C;font-weight:bold">${w.m}</span>
        <div class="row">
          <button onclick="event.stopPropagation();speak('${w.thai}')">🔊</button>
          <button onclick="event.stopPropagation();speak('${w.thai}',0.5)">🐢</button>
        </div>
      </div>
    `;
  });
  h += '</div>';
  document.getElementById('app').innerHTML = h;
}

// ✅ WORDS BY CATEGORY
function showWords(cat){
  let words = vocabularyDB[cat].words;
  let h = `<button onclick="showCategories()" style="margin:15px;background:#EA580C;color:white;">← Back</button>
           <h2 style="text-align:center;color:#EA580C">${vocabularyDB[cat].name}</h2>
           <div class="grid">`;
  words.forEach(w => {
    h += `
      <div class="card">
        <b style="font-size:24px">${w.thai}</b><br>
        <small>${w.p}</small><br>
        <span style="color:#EA580C;font-weight:bold">${w.m}</span>
        <div class="row">
          <button onclick="event.stopPropagation();speak('${w.thai}')">🔊</button>
          <button onclick="event.stopPropagation();speak('${w.thai}',0.5)">🐢</button>
        </div>
      </div>
    `;
  });
  h += '</div>';
  document.getElementById('app').innerHTML = h;
}

// ✅ FLASHCARDS
let list=[],i=0,score=0,show=false;

function flashcards(){
  list = getAllWords();
  i=0;score=0;show=false;
  render();
}

function render(){
  let w=list[i];
  let progress = Math.round(((i+1)/list.length)*100);
  document.getElementById('app').innerHTML=`
    <button onclick="menu()" style="margin:15px;background:#EA580C;color:white;">←</button>
    <h3 style="text-align:center">Score: ${score} | ${i+1}/${list.length} (${progress}%)</h3>
    <div class="card" onclick="flip()" style="cursor:pointer;font-size:36px;min-height:180px;display:flex;align-items:center;justify-content:center">
      ${show ? `<div><span style="font-size:24px;color:#EA580C">${w.m}</span><br><small style="color:#999">${w.p}</small></div>` : w.thai}
    </div>

    <div class="row">
      <button onclick="speak('${w.thai}')">🔊</button>
      <button onclick="speak('${w.thai}',0.5)">🐢</button>
    </div>

    ${show ? `
      <div class="row">
        <button onclick="ans(true)" style="background:#4CAF50;color:white;font-size:16px">✅ Got It</button>
        <button onclick="ans(false)" style="background:#f44336;color:white;font-size:16px">❌ Again</button>
      </div>
    ` : '<p style="text-align:center;color:#999">Tap card to flip</p>'}
  `;
}

function flip(){show=true;render();}
function ans(c){
  if(c)score++;
  i++;
  show=false;
  if(i>=list.length){
    document.getElementById('app').innerHTML=`
      <header>Thai Up 🇹🇭</header>
      <div style="text-align:center;padding:40px">
        <h1>🎉 Complete!</h1>
        <h2>Final Score: ${score}/${list.length}</h2>
        <p>Accuracy: ${Math.round((score/list.length)*100)}%</p>
        <button onclick="menu()" style="margin-top:20px;padding:16px;font-size:16px">Play Again</button>
      </div>
    `;
    return;
  }
  render();
}

// ✅ START
menu();

// ✅ SERVICE WORKER
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}