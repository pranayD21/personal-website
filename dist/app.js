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
 'research-art':String.raw`  [ prompt ]
       |
       v
  +---------+    +-------+
  |  model  |--->| evals |
  +---------+    +-------+
                      |
                  [ ? ]`,
 'publications-art':String.raw`       ___________
  ____/     |     \____
 /  __  __  |  __  __  \
|   __  __  |  __  __   |
|   __  __  |  __  __   |
|___________|___________|
 \__________|__________/`,
 'resume-art':String.raw`     .------------.
     | PRANAY     |
     |------------|
     | ====  ==== |
     | ========== |
     | ========   |
     | ====       |
     '------------'`,
 'links-art':String.raw`         [ me ]
          / | \
         /  |  \
      [a]  [b]  [c]
       |         |
      [d]       [e]

       connected.`,
 'contact-art':String.raw`       _____________
      /____________/|
     |\           / |
     | \   hello /  |
     |  \_______/   |
     |______________|

          -> @`
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
 animation = new AsciiPlayer({display: element, src: frames, delay: id === 'tower' ? 55 : 80});
}
function route(focus=false){
 const requested=location.hash.slice(1)||'home';
 const current=pages.some(p=>p.id===requested)?requested:'home';
 pages.forEach(p=>p.hidden=p.id!==current);
 links.forEach(a=>{if(a.hash===`#${current}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.title=`${current==='home'?'Engineering & Research':current[0].toUpperCase()+current.slice(1)} | Pranay Dogra`;
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
