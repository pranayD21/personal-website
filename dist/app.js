'use strict';
const artwork = {
 tower: String.raw`                    ^
                   /|\
                  / | \
                 /__|__\
                 |  :  |
                /|__|__|\
               /_________\
               |  _   _  |
               | | | | | |
               | |_| |_| |
               |  _   _  |
               | | | | | |
               | |_| |_| |
              _|_________|_
              |  .-----.  |
              | /   |   \ |
              | |   +-- | |
              | \       / |
              |  '-----'  |
              |-----------|
              | |       | |
              | |       | |
              | |       | |
              | |       | |
              | |       | |
              | |       | |
              | |       | |
              | |  ___  | |
             _|_|_|   |_|_|_
         ___/_______________\___
     ___/_______________________\___`,
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
let stored;
try { stored = localStorage.getItem('pd-motion'); } catch {}
let motion = !preference.matches && stored !== 'off';
let frame;
let activeArt;
const motionButton = document.getElementById('motion');
function paintMotionButton(){motionButton.textContent=`Motion: ${motion ? 'on' : 'off'}`;motionButton.setAttribute('aria-pressed',String(!motion));}
function draw(id){
 cancelAnimationFrame(frame);
 activeArt=id;
 const element=document.getElementById(id), art=artwork[id];
 if(!element)return;
 if(!motion){element.textContent=art;return;}
 const started=performance.now(), duration=id==='tower'?1500:850;
 function tick(now){
  const progress=Math.min((now-started)/duration,1);
  const lines=art.split('\n');
  if(id==='tower'){
   const visible=Math.ceil(progress*lines.length);
   element.textContent=lines.map((line,i)=>i>=lines.length-visible?line:' '.repeat(line.length)).join('\n');
  }else{
   const visible=Math.ceil(progress*art.length);
   element.textContent=[...art].map((char,i)=>i<visible||char==='\n'?char:' ').join('');
  }
  if(progress<1)frame=requestAnimationFrame(tick);
 }
 frame=requestAnimationFrame(tick);
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
motionButton.addEventListener('click',()=>{motion=!motion;try{localStorage.setItem('pd-motion',motion?'on':'off');}catch{}paintMotionButton();draw(activeArt);});
preference.addEventListener('change',e=>{motion=!e.matches;paintMotionButton();draw(activeArt);});
document.querySelectorAll('.replay').forEach(button=>button.addEventListener('click',()=>draw(button.dataset.art)));
document.getElementById('copy-email').addEventListener('click',async()=>{
 const status=document.getElementById('copy-status');
 try{await navigator.clipboard.writeText('pranay.dogra@berkeley.edu');status.textContent='Email copied.';}catch{status.textContent='Select the email address above to copy it, or click it to open your email app.';}
});
document.getElementById('year').textContent=new Date().getFullYear();
paintMotionButton();route();
