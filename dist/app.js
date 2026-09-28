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
 'research-art': "+--------------------------+\n|  EVAL LAB         [o][o]  |\n|--------------------------|\n|      .   /\\              |\n|  /\\ / \\ /  \\___/\\        |\n| /  v   v         \\___    |\n|--------------------------|\n|  [input] -> [model]       |\n|                |         |\n|  [score] <-----+          |\n+--------------------------+\n     |______________|\n    /________________\\",
 'publications-art': "       .---------------.\n       |  .---------./| |\n       |  | IEEE   / | |\n       |  |-------/  | |\n       |  |  ==  |   | |\n       |  | ==== |   | |\n       |  |  ==  |   | |\n       |  '------|---' |\n       '---------|-----'\n   .=============|=====.\n  /_______________\\_____\\\n  \\=====================/\n   '-------------------' ",
 'resume-art': "       __________________\n      /_________________/|\n     |  PRANAY DOGRA    | |\n     |------------------| |\n     |  [ ]  =========  | |\n     |       =======    | |\n     |  [ ]  =========  | |\n     |       =====      | |\n     |  [ ]  =========  | |\n     |__________________|/\n       /  o o o o o  \\\n      /  o o o o o o  \\\n     /_________________\\",
 'links-art': "        .--------.\n        |  /www  |\n        '---+----'\n            |\n    +-------+-------+\n    |       |       |\n .--+--. .--+--. .--+--.\n | </> | | @ @ | | git |\n '-----' '-----' '-----'\n    |               |\n    +----[ hello ]--+\n\n     . . . . . . . .",
 'contact-art': "          ______________\n         /             /|\n        /   HELLO     / |\n       /_____________/  |\n       |\\           /|  |\n       | \\         / |  |\n       |  \\_______/  | /\n       |_____________|/\n\n  --  --  --  -->  @\n\n       [ new message ]",
 "projects-art": "+--------------------------+\n| ~/projects       [-][x]  |\n|--------------------------|\n| $ build                 |\n|                         |\n|   [input] --> [parse]    |\n|                  |      |\n|   [run] <---- [check]    |\n|                         |\n| > _                     |\n+--------------------------+\n     |______________|\n    /________________\\",
 "star-art": "             /\\\n            /  \\\n           /____\\\n           |    |\n           | () |\n           |    |\n           |STAR|\n          /|    |\\\n         /_|____|_\\\n           / /\\ \\\n          / /  \\ \\\n            /\\\n           .  ."
};
const pages = [...document.querySelectorAll('.page')];
const links = [...document.querySelectorAll('nav a')];
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
let motion = !preference.matches;
let animation;
let activeArt;
const themeButton = document.getElementById('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
function paintThemeButton() {
 const dark = document.documentElement.dataset.theme === 'dark';
 themeButton.textContent = dark ? '[ light ]' : '[ dark ]';
 themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
 document.querySelector('meta[name="theme-color"]').content = dark ? '#20211e' : '#f5f1e8';
}
function draw(id) {
 if (animation) animation.stop();
 activeArt = id;
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
    put(next, 12, 11, step % 2 ? '*  *' : '.  .');
   } else if (id === 'research-art') {
    put(next, 1, 21, step % 4 < 2 ? '[*]' : '[o]');
    put(next, 8, 17, step % 3 === 0 ? '*' : '|');
   } else if (id === 'publications-art') {
    const x = 12 + Math.round(5 * Math.sin(step / 17 * Math.PI));
    for (let y = 3; y <= 6; y++) put(next, y, x, '/');
   } else if (id === 'resume-art') {
    put(next, 3 + 2 * (Math.floor(step / 6) % 3), 9, 'x');
    put(next, 11, 9 + step % 6 * 2, '*');
   } else if (id === 'links-art') {
    put(next, 4, 4 + step % 17, '*');
   } else if (id === 'contact-art') {
    put(next, 9, 2 + step, '>');
   }
   frames.push(next);
  }
  frames.push(grid);
 }
 animation = new AsciiPlayer({display: element, src: frames, delay: id === 'tower' ? 55 : 80});
}
function route(focus=false){
 const requested=location.hash.slice(1)||'home';
 const current=pages.some(p=>p.id===requested)?requested:'home';
 pages.forEach(p=>p.hidden=p.id!==current);
 links.forEach(a=>{if(a.hash===`#${current}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.title=`${current==='home'?'Engineering & Research':current==='star'?'STAR':current[0].toUpperCase()+current.slice(1)} | Pranay Dogra`;
 draw(current==='home'?'tower':`${current}-art`);
 if(focus){document.getElementById('main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
}
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
preference.addEventListener('change', event => { motion = !event.matches; draw(activeArt); });
document.querySelectorAll('.replay').forEach(button=>button.addEventListener('click',()=>draw(button.dataset.art)));
document.getElementById('copy-email').addEventListener('click',async()=>{
 const status=document.getElementById('copy-status');
 try{await navigator.clipboard.writeText('pranay.dogra@berkeley.edu');status.textContent='Email copied.';}catch{status.textContent='Select the email address above to copy it, or click it to open your email app.';}
});
document.getElementById('year').textContent=new Date().getFullYear();
paintThemeButton();route();
