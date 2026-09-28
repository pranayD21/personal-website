'use strict';
const artwork = {
 tower: String.raw`                   ^                   
                  /|\                  
                 / | \                 
               /___|___\               
               |   :   |               
               |_______|               
              /_________\              
              |  _   _  |              
              | | | | | |              
              | | | | | |              
              | |_| |_| |              
              |_________|              
              | .-----. |              
              |/   |   \|              
              ||   +-- ||              
              |\       /|              
              | '-----' |              
              |_________|              
              | |     | |              
              | |     | |              
              | |     | |              
              | |     | |              
              | |     | |              
              | |     | |              
              | |     | |              
              | |     | |              
              | | ___ | |              
              |_||   ||_|              
            /_____________\            
          /_________________\          
        /_____________________\        `,
 'research-art': "      o                .    \n     .         __           \n   __ __      |  |      o   \n  |     |     |  |          \n  |     |    /    \\         \n  |-----|   /      \\        \n  | . o |  /~~~~~~~~\\       \n  | o . | /  o   .   \\      \n  |_____|(____________)     \n____________________________",
 'publications-art': "      ______|______         \n     |______+______|        \n   __|      |      |__      \n  |  |      |      |  |     \n  |  |  ____|____  |  |     \n  |  | |_________| |  |     \n  |  |             |  |     \n  |  |  .-------.  |  |     \n  |==|==|=======|==|==|     \n  |  |  | ----- |  |  |     \n  |  |  | ----- |  |  |     \n _|__|__'-------'__|__|_    ",
 'resume-art': ".--------------------------.\n| PRANAY DOGRA             |\n|--------------------------|\n|                          |\n| EDUCATION                |\n| ========  ============   |\n|                          |\n| EXPERIENCE               |\n| ============  ========   |\n| ======  ==============   |\n|                          |\n'--------------------------'",
 'links-art': "        .--------.\n        |  /www  |\n        '---+----'\n            |\n    +-------+-------+\n    |       |       |\n .--+--. .--+--. .--+--.\n | </> | | @ @ | | git |\n '-----' '-----' '-----'\n    |               |\n    +----[ hello ]--+\n\n     . . . . . . . .",
 'contact-art': "          ______________\n         /             /|\n        /   HELLO     / |\n       /_____________/  |\n       |\\           /|  |\n       | \\         / |  |\n       |  \\_______/  | /\n       |_____________|/\n\n  --  --  --  -->  @\n\n       [ new message ]",
 "projects-art": "+--------------------------+\n| ~/projects       [-][x]  |\n|--------------------------|\n| $ build                 |\n|                         |\n|   [input] --> [parse]    |\n|                  |      |\n|   [run] <---- [check]    |\n|                         |\n| > _                     |\n+--------------------------+\n     |______________|\n    /________________\\",
 "star-art": "             /\\             \n            /  \\            \n           /____\\           \n           |    |           \n           | () |           \n           |    |           \n           |STAR|           \n          /|    |\\          \n         /_|____|_\\         \n            \\  /            \n             \\/             \n            .  .            \n            .  .            "
};
const pages = [...document.querySelectorAll('.page')];
const links = [...document.querySelectorAll('nav a')];
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
let motion = !preference.matches;
const animations = new Map();
const themeButton = document.getElementById('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
function paintThemeButton() {
 const dark = document.documentElement.dataset.theme === 'dark';
 themeButton.textContent = dark ? '[ light ]' : '[ dark ]';
 themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
 document.querySelector('meta[name="theme-color"]').content = dark ? '#20211e' : '#f5f1e8';
}
function draw(id) {
 if (animations.has(id)) animations.get(id).stop();
 const element = document.getElementById(id), art = artwork[id];
 if (!element || !art) return;
 const rows = art.split('\n');
 const width = Math.max(...rows.map(row => row.length));
 const grid = rows.map(row => row.padEnd(width));
 if (!motion) { element.textContent = grid.join('\n'); return; }
 const frames = [];
 for (let count = 0; count <= grid.length; count++) {
  frames.push(grid.map((row, y) => (id === 'tower' ? y >= grid.length - count : y < count) ? row : ' '.repeat(width)));
 }
 if (id === 'tower') {
  // Hold the completed tower, then move the clock hand once.
  for (let i = 0; i < 5; i++) frames.push([...grid]);
  const moved = [...grid];
  const setCell = (row, col, char) => { moved[row] = moved[row].slice(0, col) + char + moved[row].slice(col + 1); };
  setCell(13, 19, ' ');
  setCell(14, 20, ' ');
  setCell(14, 21, ' ');
  setCell(15, 19, '|');
  for (let i = 0; i < 7; i++) frames.push(moved);
  frames.push(grid);
 }
 if (id !== 'tower') {
  const put = (frame, y, x, text) => { frame[y] = frame[y].slice(0, x) + text + frame[y].slice(x + text.length); };
  // Each illustration has a brief motion sequence after its entrance.
  for (let step = 0; step < 18; step++) {
   const next = [...grid];
   if (id === 'projects-art') {
    put(next, 9, 4, ['|','/','-','\\'][step % 4]);
   } else if (id === 'star-art') {
    put(next, 11, 11, step % 2 ? ' .  . ' : '  ..  ');
    put(next, 12, 11, step % 2 ? '  ..  ' : ' .  . ');
   } else if (id === 'research-art') {
    put(next, 6, 4, step % 3 ? 'o' : '.');
    put(next, 7, 5, step % 3 ? '.' : 'o');
    put(next, 7, 15, step % 2 ? 'o' : '.');
    put(next, 0, 6, step % 3 ? ' ' : 'o');
    put(next, 1, 5, step % 3 ? 'o' : ' ');
   } else if (id === 'publications-art') {
    // The platen presses down, then a printed sheet feeds out.
    if (step % 9 < 4) {
     put(next, 4, 8, '    |    ');
     put(next, 5, 7, ' |       | ');
     put(next, 6, 8, '|_______|');
    }
    const ink = Math.min(5, Math.max(0, step - 7));
    put(next, 9, 10, '-'.repeat(ink).padEnd(5));
    put(next, 10, 10, '-'.repeat(Math.max(0, ink - 1)).padEnd(5));
   } else if (id === 'resume-art') {
    const typed = Math.floor(step / 17 * 20);
    for (const y of [5, 8, 9]) {
     put(next, y, 2, grid[y].slice(2, 25).slice(0, typed).padEnd(23));
    }
   } else if (id === 'links-art') {
    put(next, 4, 4 + step % 17, '*');
   } else if (id === 'contact-art') {
    put(next, 9, 2 + step, '>');
   }
   frames.push(next);
  }
  frames.push(grid);
 }
 animations.set(id, new AsciiPlayer({display: element, src: frames, delay: id === 'tower' ? 55 : 80}));
}
function route(focus=false){
 const requested=location.hash.slice(1)||'home';
 const current=requested==='publications'?'research':pages.some(p=>p.id===requested)?requested:'home';
 animations.forEach(player => player.stop());
 pressObserver.disconnect();
 pages.forEach(p=>p.hidden=p.id!==current);
 links.forEach(a=>{if(a.hash===`#${current}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.title=`${current==='home'?'Engineering & Research':current==='star'?'STAR':current[0].toUpperCase()+current.slice(1)} | Pranay Dogra`;
 draw(current==='home'?'tower':`${current}-art`);
 if(current==='research') pressObserver.observe(document.getElementById('publications-art')); 
 if(focus){document.getElementById('main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
 if(requested==='publications') document.getElementById('publications').scrollIntoView();
}
const pressObserver = new IntersectionObserver(entries => {
 for (const entry of entries) if(entry.isIntersecting) { draw('publications-art'); pressObserver.unobserve(entry.target); }
}, {threshold:0.2});
window.addEventListener('hashchange',()=>route(true));
themeButton.addEventListener('click', () => {
 const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
 document.documentElement.dataset.theme = theme;
 try { localStorage.setItem('pd-theme', theme); } catch {}
 paintThemeButton();
});
systemTheme.addEventListener('change', event => {
 let saved;
 try { saved = localStorage.getItem('pd-theme'); } catch {}
 if (!saved) { document.documentElement.dataset.theme = event.matches ? 'dark' : 'light'; paintThemeButton(); }
});
preference.addEventListener('change', event => { motion = !event.matches; animations.forEach((player,id) => draw(id)); });
document.querySelectorAll('.replay').forEach(button=>button.addEventListener('click',()=>draw(button.dataset.art)));
document.getElementById('copy-email').addEventListener('click',async()=>{
 const status=document.getElementById('copy-status');
 try{await navigator.clipboard.writeText('pranay.dogra@berkeley.edu');status.textContent='Email copied.';}catch{status.textContent='Select the email address above to copy it, or click it to open your email app.';}
});
document.getElementById('year').textContent=new Date().getFullYear();
paintThemeButton();route();
