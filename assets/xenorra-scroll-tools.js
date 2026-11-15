
(function(){
 'use strict';
 if(document.querySelector('.xen-scroll-tools'))return;
 const panel=document.createElement('div');
 panel.className='xen-scroll-tools';
 panel.setAttribute('aria-label','Page navigation shortcuts');
 const make=(symbol,label)=>{
   const b=document.createElement('button');
   b.type='button';b.textContent=symbol;b.title=label;b.setAttribute('aria-label',label);
   panel.appendChild(b);return b;
 };
 const up=make('↑','Scroll to previous section');
 const down=make('↓','Scroll to next section');
 document.body.appendChild(panel);
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const targets=()=>[...document.querySelectorAll('main > section,main > .hero,main > .page-hero,main > .xen-painted-hero,main > .chapter,footer')]
   .filter(el=>el.getBoundingClientRect().height>70);
 const jump=(direction)=>{
   const y=window.scrollY;
   const points=[0,...targets().map(el=>Math.max(0,el.getBoundingClientRect().top+y-78)),Math.max(0,document.documentElement.scrollHeight-window.innerHeight)];
   const unique=[...new Set(points.map(Math.round))].sort((a,b)=>a-b);
   const dest=direction>0?unique.find(p=>p>y+28):unique.slice().reverse().find(p=>p<y-28);
   if(dest!==undefined)window.scrollTo({top:dest,behavior:reduced.matches?'auto':'smooth'});
 };
 up.addEventListener('click',()=>jump(-1));
 down.addEventListener('click',()=>jump(1));
 let raf=0;
 const refresh=()=>{
   raf=0;
   const y=window.scrollY;
   panel.classList.toggle('is-visible',y>180);
   up.disabled=y<20;
   down.disabled=y+window.innerHeight>=document.documentElement.scrollHeight-20;
 };
 window.addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(refresh)},{passive:true});
 window.addEventListener('resize',refresh,{passive:true});
 refresh();
})();
