/* Thecosystems MSD diagram hero animation (askTheco + ChatGPT Plugin).
   Usage (Tilda Zero Block > HTML element, ~550 x 862):
     <div id="tcm"></div>
     <script src="https://cdn.jsdelivr.net/gh/tonymcguigan/tc-hero@main/msd-diagram/msd-diagram.min.js" defer></script>
   Fonts load from the same folder as this script. */
(function(){
var cs=document.currentScript,B=(cs&&cs.src||'').replace(/[^\/?#]*([?#].*)?$/,'');
if(!document.getElementById('tcm-css')){var st=document.createElement('style');st.id='tcm-css';
st.textContent="@font-face{font-family:'TCM Lato';font-weight:400 500;font-display:swap;src:url(@B@Lato-Regular.woff2) format(\"woff2\")}@font-face{font-family:'TCM Lato';font-weight:700;font-display:swap;src:url(@B@Lato-Bold.woff2) format(\"woff2\")}.tcm{--b:#148fcf;--t:#0ccbb8;--u:#8c4482;--ink:#1a2332;width:100%;max-width:550px;margin:0 auto;font-family:'TCM Lato','Lato',-apple-system,\"Segoe UI\",Roboto,Arial,sans-serif}\n.tcm>svg{display:block;width:100%;height:auto;overflow:visible}\n.tcm text{font-family:inherit}\n.tcm .track{fill:none;stroke-width:5;stroke-linejoin:round;stroke-dasharray:1}\n.tcm .track.top{stroke:var(--b)}.tcm .d .track{stroke:var(--u)}.tcm .p .track{stroke:var(--t)}\n.tcm .line,.tcm .endm{transition:opacity .35s}\n.tcm .hit{fill:none;stroke:transparent;stroke-width:40;pointer-events:stroke;cursor:pointer}\n.tcm .endm{cursor:pointer;outline:none}\n.tcm .dotc{fill:#fff;stroke:var(--ink);stroke-width:5;transition:fill .3s,stroke .3s}\n.tcm .endm.d.on .dotc,.tcm .endm.d:hover .dotc,.tcm .endm.d.sel .dotc{fill:var(--u);stroke:var(--u)}\n.tcm .endm.p.on .dotc,.tcm .endm.p:hover .dotc,.tcm .endm.p.sel .dotc{fill:var(--t);stroke:var(--t)}\n.tcm .endm:focus-visible .dotc{stroke-width:7}\n.tcm .endm .hint{fill:none;stroke:var(--ink);stroke-width:1.5;opacity:0;transform-box:fill-box;transform-origin:center}\n.tcm[data-f=\"d\"] .line.p,.tcm[data-f=\"p\"] .line.d{opacity:.2}\n.tcm[data-f=\"d\"] .endm.p,.tcm[data-f=\"p\"] .endm.d{opacity:.3}\n.tcm .endm .big{font-size:18px;font-weight:700;fill:var(--ink);text-anchor:middle}\n.tcm .endm .sub{font-size:14px;font-weight:500;fill:var(--ink);text-anchor:middle}\n.tcm .conn{font-size:16px;font-weight:700;fill:var(--ink);text-anchor:middle}\n.tcm .q{font-size:16px;font-weight:700;fill:#1a2332;fill-opacity:.7}\n.tcm:not(.go) .track{stroke-dashoffset:1}\n.tcm:not(.go) .endm,.tcm:not(.go) .tnode,.tcm:not(.go) .core,.tcm:not(.go) .gpt,.tcm:not(.go) .bar,.tcm:not(.go) .glow{opacity:0}\n.tcm.go .tnode{animation:tcmf .5s backwards}\n.tcm.go .track.top{animation:tcmd 1.6s cubic-bezier(.55,0,.25,1) .3s backwards}\n.tcm.go .track.low{animation:tcmd 1.4s cubic-bezier(.55,0,.25,1) 2.3s backwards}\n.tcm.go .gpt{animation:tcmp .6s cubic-bezier(.3,1.5,.5,1) .9s backwards}\n.tcm.go .core,.tcm.go .glow{animation:tcmp .7s cubic-bezier(.3,1.4,.5,1) 1.6s backwards}\n.tcm.go .bar{animation:tcmp .6s cubic-bezier(.3,1.4,.5,1) 2s backwards}\n.tcm.go .endm{animation:tcmf .7s 3.5s backwards}\n.tcm.go .gpt,.tcm.go .core,.tcm.go .bar,.tcm.go .glow{transform-box:fill-box;transform-origin:center}\n.tcm.go .endm .hint{animation:tcmh 3.2s ease-out 4.5s infinite}\n.tcm[data-f] .endm .hint{animation:none!important}\n@keyframes tcmd{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}\n@keyframes tcmp{from{opacity:0;transform:scale(.6)}}\n@keyframes tcmf{from{opacity:0}}\n@keyframes tcmh{0%{opacity:.3;transform:scale(1)}70%,100%{opacity:0;transform:scale(2.3)}}\n@media (prefers-reduced-motion:reduce){.tcm.go *{animation:none!important}}\n".replace(/@B@/g,B);document.head.appendChild(st);}
var host=document.getElementById('tcm');
if(!host){host=document.createElement('div');host.id='tcm';cs&&cs.parentNode?cs.parentNode.insertBefore(host,cs):document.body.appendChild(host);}
host.className='tcm';host.innerHTML="<svg id=\"tcm-svg\" role=\"group\" aria-label=\"Activities from across the therapeutic ecosystem flow through the ChatGPT Plugin into askTheco, and out to answers for each condition\"></svg>";
})();
(function(){
/* ---- settings ---- */
var CFG={scrollTo:'#signup',field:'conditions',names:{d:'Dyslipidaemia',p:'Prostate Cancer'}};
var ACT=['Centres of Excellence','Regulatory & HTA Bodies','Professional Associations','Events','Centres of Excellence','Guidelines'];
var SUB0='Patient Advocacy Groups';          /* copy under each end title until the first icon arrives */
var QUESTION='What do you need to know?';
var REV=210;                                  /* px from the end circle where a spot starts turning into its activity icon (before the final bend) */
var SEQ={d:[0,1,2,3,4,5],p:[2,4,0,5,1,3]};   /* icon order per branch */
var GAP=2860;                                 /* ms between spots leaving the top node (they alternate left / right) */
var SPEED=.0945;                               /* px per ms along the line */
var SPOT=7.51,K=SPOT/9.51;                    /* spot radius; icon badge and glyphs scale pro rata */
var PLUG_MS=1100;                             /* length of the ChatGPT Plugin outline reaction */
/* ------------------ */
var ICON=[["M6.14,18.22c0-.42.11-.81.33-1.17.22-.35.51-.62.87-.81.77-.39,1.55-.67,2.35-.87.8-.19,1.6-.29,2.42-.29s1.63.1,2.42.29c.8.19,1.58.48,2.35.87.36.19.65.46.87.81s.33.74.33,1.17v.6c0,.41-.15.76-.44,1.05s-.64.44-1.05.44H7.63c-.41,0-.76-.15-1.05-.44-.29-.29-.44-.64-.44-1.05v-.6ZM19.16,20.31c.14-.22.24-.46.31-.72s.1-.51.1-.77v-.75c0-.55-.15-1.07-.46-1.58s-.74-.94-1.3-1.3c.63.07,1.23.2,1.79.38s1.08.4,1.57.66c.45.25.79.53,1.03.83s.35.64.35,1v.75c0,.41-.15.76-.44,1.05s-.64.44-1.05.44h-1.9ZM10,13.47c-.58-.58-.88-1.29-.88-2.11s.29-1.52.88-2.11c.58-.58,1.29-.88,2.11-.88s1.52.29,2.11.88.88,1.29.88,2.11-.29,1.52-.88,2.11c-.58.58-1.29.88-2.11.88s-1.52-.29-2.11-.88ZM18.69,13.47c-.58.58-1.29.88-2.11.88-.14,0-.31-.02-.52-.05s-.39-.07-.52-.1c.34-.4.59-.84.77-1.32s.27-.99.27-1.51-.09-1.03-.27-1.51-.44-.93-.77-1.32c.17-.06.35-.1.52-.12s.35-.03.52-.03c.82,0,1.52.29,2.11.88s.88,1.29.88,2.11-.29,1.52-.88,2.11Z",14.34],["M8.28,70.37v-4.33c0-.25.08-.45.25-.62s.37-.25.62-.25.45.08.62.25.25.37.25.62v4.33c0,.25-.08.45-.25.62s-.37.25-.62.25-.45-.08-.62-.25-.25-.37-.25-.62ZM13.48,70.37v-4.33c0-.25.08-.45.25-.62s.37-.25.62-.25.45.08.62.25c.17.17.25.37.25.62v4.33c0,.25-.08.45-.25.62-.17.17-.37.25-.62.25s-.45-.08-.62-.25-.25-.37-.25-.62ZM6.55,74.69c-.25,0-.45-.08-.62-.25-.17-.17-.25-.37-.25-.62s.08-.45.25-.62.37-.25.62-.25h15.58c.25,0,.45.08.62.25s.25.37.25.62-.08.45-.25.62c-.17.17-.37.25-.62.25H6.55ZM18.67,70.37v-4.33c0-.25.08-.45.25-.62s.37-.25.62-.25.45.08.62.25.25.37.25.62v4.33c0,.25-.08.45-.25.62s-.37.25-.62.25-.45-.08-.62-.25-.25-.37-.25-.62ZM22.14,63.44H6.47c-.22,0-.4-.08-.55-.23s-.23-.34-.23-.55v-.48c0-.16.04-.3.12-.41s.18-.21.31-.28l7.45-3.72c.25-.12.51-.17.78-.17s.53.06.78.17l7.4,3.7c.16.07.28.18.36.32s.12.3.12.45v.32c0,.25-.08.45-.25.62s-.37.25-.62.25Z",67.05],["M13.5,121.95v-1.7h1.7v1.7h-1.7ZM12.65,114.32h3.39v-1.7h-3.39v1.7ZM7.56,127.04c-.47,0-.87-.17-1.2-.5-.33-.33-.5-.73-.5-1.2v-3.39h5.94v.85c0,.24.08.44.24.6s.36.24.6.24h3.39c.24,0,.44-.08.6-.24s.24-.36.24-.6v-.85h5.94v3.39c0,.47-.17.87-.5,1.2-.33.33-.73.5-1.2.5H7.56ZM5.86,120.26v-4.24c0-.47.17-.87.5-1.2s.73-.5,1.2-.5h3.39v-1.7c0-.47.17-.87.5-1.2s.73-.5,1.2-.5h3.39c.47,0,.87.17,1.2.5s.5.73.5,1.2v1.7h3.39c.47,0,.87.17,1.2.5s.5.73.5,1.2v4.24h-5.94v-.85c0-.24-.08-.44-.24-.6-.16-.16-.36-.24-.6-.24h-3.39c-.24,0-.44.08-.6.24-.16.16-.24.36-.24.6v.85h-5.94Z",119.75],["M14.96,176.93c-.41-.41-.62-.91-.62-1.51s.21-1.1.62-1.51c.41-.41.91-.62,1.51-.62s1.1.21,1.51.62.62.91.62,1.51-.21,1.1-.62,1.51c-.41.41-.91.62-1.51.62s-1.1-.21-1.51-.62ZM8.39,180.95c-.47,0-.87-.17-1.2-.5-.33-.33-.5-.73-.5-1.2v-11.9c0-.47.17-.87.5-1.2.33-.33.73-.5,1.2-.5h.85v-.85c0-.24.08-.44.24-.61.16-.16.36-.24.61-.24s.44.08.61.24.24.36.24.61v.85h6.8v-.85c0-.24.08-.44.24-.61s.36-.24.61-.24.44.08.61.24.24.36.24.61v.85h.85c.47,0,.87.17,1.2.5s.5.73.5,1.2v11.9c0,.47-.17.87-.5,1.2s-.73.5-1.2.5h-11.9ZM8.39,179.25h11.9v-8.5h-11.9v8.5Z",172.45],["M9.83,224.34v-3.43h-1.8v.9c0,.57.17,1.09.5,1.54s.77.79,1.31.98ZM18.85,224.34c.54-.2.98-.52,1.31-.98s.5-.97.5-1.54v-.9h-1.8v3.43ZM13.44,231.74v-2.8c-.74-.17-1.39-.48-1.97-.94s-1-1.03-1.27-1.73c-1.13-.14-2.07-.63-2.83-1.48-.76-.85-1.14-1.85-1.14-2.99v-.9c0-.5.18-.92.53-1.27.35-.35.78-.53,1.27-.53h1.8c0-.5.18-.92.53-1.27s.78-.53,1.27-.53h5.41c.5,0,.92.18,1.27.53s.53.78.53,1.27h1.8c.5,0,.92.18,1.27.53s.53.78.53,1.27v.9c0,1.14-.38,2.14-1.14,2.99-.76.85-1.7,1.34-2.83,1.48-.27.69-.7,1.27-1.27,1.73s-1.24.77-1.97.94v2.8h2.71c.26,0,.47.09.64.26s.26.39.26.64-.09.47-.26.64c-.17.17-.39.26-.64.26h-7.22c-.26,0-.47-.09-.64-.26-.17-.17-.26-.39-.26-.64s.09-.47.26-.64.39-.26.64-.26h2.71Z",225.15],["M10.52,281.44h1.19v-10.1h-1.19v10.1ZM9.67,285.7c-.58,0-1.07-.21-1.47-.63-.4-.42-.61-.92-.61-1.52v-11.3c0-.6.2-1.1.61-1.52.4-.42.9-.63,1.47-.63h8.5v12.56h-8.5c-.25,0-.45.09-.63.26-.17.17-.26.39-.26.64s.09.47.26.64c.17.17.38.26.63.26h10.24v-12.72h1.19v13.95h-11.43Z",277.85]];
var BLUE='#148fcf',COL={d:'#8c4482',p:'#0ccbb8'},CX=273.89,CY=415.78,R=100.9,PX=274.02,PY=182.26,PR=83.7,POOL=5,W=500.61,H=785;
var root=document.getElementById('tcm'),svg=document.getElementById('tcm-svg');
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var sel=null,hov=null,E={},paths={},len={},T0=null,started=false,DASK=0,DIN=0,DSW=0;
var ev={ask:-1,plug:-1,emit:-1,arr:{d:-1,p:-1}},ringT=-1e9,plugT=-1e9,emitT=-1e9,typeT=null,onUntil={d:0,p:0},ripT={d:-1e9,p:-1e9},SW={d:{t:-1e9},p:{t:-1e9}};
function el(s){return svg.querySelector(s);}
function build(){
  var o='<defs><filter id="tcm-sh" x="-20%" y="-60%" width="140%" height="240%"><feDropShadow dx="0" dy="5" stdDeviation="8" flood-color="#000" flood-opacity=".1"/></filter>'+
   '<filter id="tcm-sh2" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#000" flood-opacity=".15"/></filter>'+
   '<clipPath id="tcm-cc"><circle cx="'+CX+'" cy="'+CY+'" r="'+R+'"/></clipPath></defs><g>';
  o+='<circle class="glow" cx="274.02" cy="'+CY+'" r="136.79" fill="#0099d8" opacity=".08"/><circle id="tcm-ring" cx="'+CX+'" cy="'+CY+'" r="'+R+'" fill="none" stroke="'+BLUE+'" stroke-width="3" opacity="0"/>';
  var LOW={d:'M268.72,424.64V595.11c0,5.9 -4.78,10.68 -10.68,10.68H174.07c-12.56,0 -22.73,10.18 -22.73,22.73V696.54',
           p:'M279.4,424.64V595.11c0,5.9 4.78,10.68 10.68,10.68H374.05c12.56,0 22.73,10.18 22.73,22.73V696.54'};
  o+='<path class="track top" pathLength="1" d="M273.69,24.5V424.95"/>';
  ['d','p'].forEach(function(k){o+='<g class="line '+k+'" data-k="'+k+'"><path class="hit" d="'+LOW[k]+'"/><path class="track low" pathLength="1" d="'+LOW[k]+'"/>'+
     '<path class="mp" d="M273.69,24.5V430H'+LOW[k].slice(1).split(',')[0]+LOW[k].slice(LOW[k].indexOf('V'))+'" fill="none" stroke="none"/></g>';});
  /* destination markers (also the condition buttons) */
  [['d',152.48],['p',397.4]].forEach(function(a){var k=a[0],x=a[1];
    o+='<g class="endm '+k+'" data-k="'+k+'" role="button" tabindex="0" aria-pressed="false" aria-label="Pick your condition: '+CFG.names[k]+'">'+
       '<rect x="'+(x-90)+'" y="680" width="180" height="104" fill="transparent"/>'+
       '<circle class="erip" cx="'+x+'" cy="705.69" r="11" fill="none" stroke="'+COL[k]+'" stroke-width="3" opacity="0"/><circle class="hint" cx="'+x+'" cy="705.69" r="11"/><circle class="dotc" cx="'+x+'" cy="705.69" r="11"/>'+
       '<text class="big" x="'+x+'" y="749.34">'+CFG.names[k]+'</text><text class="sub" x="'+x+'" y="776.34" opacity=".7">'+SUB0+'</text></g>';
  });
  /* top node */
  o+='<g class="tnode"><circle id="tcm-trip" cx="273.79" cy="13.5" r="11" fill="none" stroke="'+BLUE+'" stroke-width="3" opacity="0"/><circle class="dotc" cx="273.79" cy="13.5" r="11"/></g>';
  /* travelling spots (one shared pool) */
  for(var j=0;j<POOL;j++){
    o+='<g class="dot" data-j="'+j+'" opacity="0"><circle class="sp" r="'+SPOT+'" fill="'+BLUE+'"/>';
    ICON.forEach(function(ic){o+='<g class="ic" opacity="0" transform="scale('+K.toFixed(4)+') translate(-14.34,'+(-ic[1])+')"><path fill="#fff" d="'+ic[0]+'"/></g>';});
    o+='</g>';}
  /* ChatGPT Plugin: white disc hides spots passing behind; outline + ripple react as each spot enters */
  o+='<g class="gpt"><circle id="tcm-prip" cx="'+PX+'" cy="'+PY+'" r="'+PR+'" fill="none" stroke="'+BLUE+'" stroke-width="1.5" opacity="0"/>'+
     '<circle id="tcm-pout" cx="'+PX+'" cy="'+PY+'" r="'+PR+'" fill="none" stroke="'+BLUE+'" stroke-width="1" stroke-opacity="'+(reduce?.25:0)+'" filter="url(#tcm-sh2)"/>'+
     '<g id="tcm-pdisc"><circle cx="274.02" cy="182.43" r="63.12" fill="#fff" filter="url(#tcm-sh2)"/>'+
     '<path fill="#1a2332" transform="translate(-98.43,-33.23)" d="M389.17,188.33c.88-3.21.03-6.79-2.56-9.31-2.59-2.52-6.25-3.36-9.54-2.5-2.41-2.35-6.01-3.42-9.54-2.49-3.53.92-6.1,3.6-6.99,6.81-3.29.86-6.04,3.37-6.98,6.82-.95,3.45.15,6.96,2.55,9.31-.88,3.21-.03,6.79,2.56,9.31,2.59,2.52,6.25,3.36,9.54,2.5,2.41,2.35,6.01,3.42,9.54,2.49,3.53-.92,6.1-3.6,6.99-6.81,3.29-.86,6.04-3.37,6.98-6.82.95-3.45-.15-6.96-2.56-9.31h0ZM375.75,179.28c2.96-1.67,6.82-1.27,9.35,1.2,1.79,1.75,2.52,4.14,2.19,6.4l-8.35-4.7c-.33-.19-.74-.19-1.07,0l-9.77,5.51v-3.7c0-.25.14-.48.36-.61l7.28-4.1ZM372.64,187.54l4.53,2.55v5.1l-4.53,2.55-4.53-2.55v-5.1l4.53-2.55ZM362.34,183.34c0-3.34,2.28-6.4,5.74-7.3,2.45-.64,4.93-.06,6.78,1.35l-8.35,4.7c-.33.19-.53.53-.53.9v11.01l-3.29-1.85c-.22-.13-.36-.36-.36-.61v-8.2ZM355.62,188.2c.65-2.39,2.41-4.2,4.59-5.06v9.4c0,.37.2.71.53.9l9.77,5.51-3.29,1.85c-.22.13-.5.13-.72,0l-7.28-4.1c-2.97-1.67-4.54-5.13-3.61-8.5h0ZM369.53,206.01c-2.96,1.67-6.82,1.27-9.35-1.2-1.79-1.75-2.52-4.14-2.19-6.4l8.35,4.7c.33.19.74.19,1.07,0l9.77-5.51v3.7c0,.25-.14.48-.36.61l-7.28,4.1ZM382.95,201.96c0,3.34-2.28,6.4-5.74,7.3-2.45.64-4.93.06-6.78-1.35l8.35-4.7c.33-.19.53-.53.53-.9v-11.01l3.29,1.85c.22.13.36.36.36.61v8.2ZM389.67,197.1c-.65,2.39-2.41,4.2-4.59,5.06v-9.4c0-.37-.2-.71-.53-.9l-9.77-5.51,3.29-1.85c.22-.13.5-.13.72,0l7.28,4.1c2.96,1.67,4.54,5.13,3.61,8.5h0Z"/>'+
     '<text class="conn" x="274.02" y="197.97">ChatGPT</text><text class="conn" x="274.02" y="215.97">Plugin</text></g></g>';
  /* askTheco circle */
  o+='<g class="core"><circle cx="'+CX+'" cy="'+CY+'" r="'+R+'" fill="#fff"/><g clip-path="url(#tcm-cc)"><image x="162.68" y="321.21" width="240" height="192" opacity=".5" href="data:image/webp;base64,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"/></g>'+
     '<g transform="translate(-98.72,-54.05)"><g fill="#148fcf"><path d="M314.86,464.81c-.44,0-.77-.07-1.01-.2-.24-.13-.43-.4-.56-.8l-.41-1.36c-.48.44-.96.81-1.41,1.15-.47.33-.95.6-1.44.83-.49.23-1.03.39-1.6.51-.57.12-1.19.17-1.88.17-.81,0-1.56-.11-2.24-.33-.68-.23-1.28-.55-1.77-.97-.49-.44-.88-.97-1.16-1.63-.28-.64-.41-1.4-.41-2.25,0-.72.19-1.44.57-2.13.39-.69,1.01-1.33,1.9-1.9.88-.56,2.06-1.04,3.54-1.41,1.47-.37,3.3-.59,5.5-.64v-1.12c0-1.28-.28-2.22-.83-2.85-.55-.61-1.33-.92-2.38-.92-.75,0-1.36.09-1.85.27-.49.17-.92.37-1.3.59-.37.21-.71.41-1.01.59-.31.17-.64.27-1.01.27-.32,0-.6-.08-.83-.25-.23-.17-.4-.36-.55-.59l-.83-1.48c2.2-2.01,4.86-3.02,7.95-3.02,1.12,0,2.12.19,3,.55.88.36,1.63.88,2.24,1.53.61.65,1.08,1.44,1.39,2.34.32.91.48,1.9.48,2.98v12.08h-2.09.03ZM307.96,461.94c.95,0,1.76-.17,2.46-.52.69-.35,1.36-.87,2.03-1.56v-3.22c-1.35.07-2.47.17-3.38.35-.91.17-1.63.39-2.18.64-.55.27-.95.56-1.17.92-.24.35-.36.73-.36,1.13,0,.81.24,1.39.72,1.73.48.35,1.11.52,1.88.52h0Z"/><path d="M331.7,449.36c-.12.2-.24.33-.37.41-.13.08-.29.12-.5.12-.22,0-.45-.07-.69-.19-.24-.12-.52-.27-.86-.41-.33-.15-.69-.3-1.1-.43-.41-.12-.89-.19-1.46-.19-.87,0-1.56.19-2.05.58-.5.39-.74.9-.74,1.51,0,.41.13.76.38,1.04.26.28.6.52,1.02.74.42.21.91.4,1.44.58.54.17,1.09.35,1.64.55.55.2,1.1.43,1.64.68.54.25,1.02.58,1.44.98.42.39.77.87,1.02,1.42s.38,1.22.38,1.98c0,.92-.15,1.78-.47,2.55-.32.78-.78,1.46-1.41,2.02-.63.56-1.38,1.02-2.3,1.32-.91.32-1.97.48-3.16.48-.63,0-1.25-.05-1.85-.17-.6-.12-1.18-.28-1.74-.5-.55-.21-1.06-.47-1.53-.75-.47-.28-.88-.6-1.24-.94l1.02-1.77c.13-.21.28-.37.46-.48.18-.11.41-.17.68-.17s.54.08.78.24c.24.16.52.33.86.52.33.19.7.36,1.14.52.43.16.98.24,1.65.24.52,0,.97-.07,1.36-.2.37-.13.69-.31.93-.51.24-.21.42-.46.54-.74.12-.28.17-.58.17-.87,0-.46-.13-.82-.38-1.11-.26-.28-.6-.54-1.02-.75-.42-.21-.91-.4-1.44-.58-.54-.17-1.1-.35-1.66-.55-.56-.2-1.13-.43-1.66-.7-.54-.27-1.02-.62-1.44-1.02-.42-.41-.77-.92-1.02-1.51-.26-.6-.38-1.32-.38-2.17,0-.79.15-1.54.45-2.25.29-.71.74-1.34,1.32-1.86.58-.54,1.3-.95,2.16-1.27.87-.32,1.87-.48,2.99-.48,1.27,0,2.42.21,3.45.65,1.04.44,1.91,1.02,2.6,1.73l-1,1.67h-.03Z"/><path d="M339.79,436.93v16.13h.85c.3,0,.55-.04.73-.12.17-.08.36-.24.54-.5l4.71-5.97c.2-.27.41-.47.66-.61.24-.14.55-.2.94-.2h4.17l-5.9,7.22c-.42.57-.87,1-1.37,1.31.26.19.49.41.69.66.2.26.4.53.58.81l6.33,9.44h-4.12c-.36,0-.66-.05-.92-.18-.26-.12-.48-.34-.65-.65l-4.85-7.38c-.17-.28-.36-.47-.54-.57-.18-.1-.46-.14-.83-.14h-1.03v8.91h-4.57v-28.17h4.6Z"/></g><g fill="#1a2332"><path d="M370.98,437.69v4.18h-8.14v23.22h-5.03v-23.22h-8.14v-4.18h21.32Z"/><path d="M372.5,465.09v-28.16h4.63v10.82c.75-.72,1.58-1.3,2.47-1.75.9-.45,1.95-.66,3.17-.66,1.04,0,1.98.18,2.8.54s1.48.87,2.03,1.52c.55.65.95,1.42,1.23,2.33.28.91.41,1.9.41,2.99v12.37h-4.63v-12.37c0-1.19-.27-2.11-.8-2.76s-1.35-.98-2.45-.98c-.8,0-1.55.19-2.25.56-.7.37-1.36.87-1.98,1.5v14.06h-4.64Z"/><path d="M399.99,445.32c1.2,0,2.32.19,3.34.58,1.02.39,1.89.95,2.62,1.7.73.75,1.3,1.66,1.72,2.73.41,1.08.63,2.31.63,3.69,0,.7-.08,1.18-.23,1.42-.15.24-.44.36-.85.36h-11.83c.08.99.25,1.83.52,2.55.28.72.64,1.31,1.08,1.78.45.47.98.82,1.6,1.04.61.23,1.29.35,2.04.35s1.38-.09,1.93-.27c.55-.17,1.01-.36,1.41-.58.4-.21.76-.4,1.06-.58.31-.17.6-.27.89-.27.39,0,.67.15.85.43l1.32,1.68c-.51.6-1.08,1.1-1.72,1.51-.64.4-1.29.74-1.98.98-.69.24-1.4.41-2.1.52-.72.09-1.41.15-2.08.15-1.33,0-2.57-.23-3.71-.67-1.14-.44-2.14-1.1-2.98-1.97-.84-.87-1.5-1.94-2-3.22-.48-1.28-.73-2.76-.73-4.45,0-1.31.21-2.54.64-3.69s1.02-2.15,1.82-3.01c.79-.86,1.76-1.54,2.89-2.03,1.13-.49,2.42-.75,3.85-.75h.01ZM400.08,448.62c-1.34,0-2.4.37-3.15,1.14-.76.76-1.24,1.85-1.45,3.24h8.68c0-.6-.08-1.16-.25-1.7-.17-.53-.41-.99-.76-1.39-.33-.4-.76-.71-1.28-.95-.52-.23-1.12-.35-1.8-.35h.01Z"/><path d="M424.48,449.68c-.13.17-.25.31-.38.41-.13.09-.3.15-.54.15-.23,0-.44-.07-.65-.21s-.47-.31-.75-.48c-.29-.19-.64-.35-1.04-.48-.4-.15-.91-.21-1.51-.21-.77,0-1.43.15-2.01.44-.58.29-1.06.71-1.43,1.26s-.67,1.22-.86,1.99c-.19.78-.28,1.66-.28,2.65s.1,1.94.31,2.73c.2.8.5,1.47.89,2.01.39.55.86.95,1.41,1.23.55.28,1.17.41,1.86.41s1.26-.09,1.68-.27c.43-.17.79-.37,1.08-.6.29-.21.55-.41.77-.6.21-.19.46-.27.73-.27.35,0,.62.15.79.43l1.24,1.68c-.48.6-1.01,1.1-1.57,1.51-.57.4-1.14.74-1.75.98-.6.24-1.23.41-1.86.52-.64.09-1.27.15-1.91.15-1.12,0-2.16-.23-3.16-.67-.99-.44-1.85-1.08-2.59-1.94-.74-.84-1.32-1.89-1.75-3.12-.43-1.23-.64-2.63-.64-4.2,0-1.4.19-2.72.58-3.92.38-1.2.94-2.25,1.68-3.13.74-.88,1.66-1.56,2.74-2.07,1.09-.49,2.35-.75,3.77-.75s2.53.23,3.55.7c1.02.47,1.92,1.12,2.74,1.98l-1.14,1.69h-.01Z"/><path d="M435.74,445.31c1.36,0,2.61.23,3.73.7,1.12.47,2.08,1.12,2.88,1.97.8.84,1.42,1.89,1.84,3.1.44,1.22.64,2.59.64,4.11s-.22,2.9-.64,4.12c-.44,1.22-1.04,2.26-1.84,3.13-.8.87-1.76,1.52-2.88,1.98s-2.37.7-3.73.7-2.64-.23-3.77-.7c-1.13-.47-2.1-1.12-2.9-1.98-.8-.86-1.42-1.9-1.85-3.13-.44-1.23-.66-2.59-.66-4.12s.22-2.88.66-4.11c.44-1.23,1.05-2.26,1.85-3.1.8-.84,1.76-1.5,2.9-1.97,1.13-.47,2.38-.7,3.77-.7ZM435.74,461.53c1.53,0,2.68-.53,3.41-1.6.73-1.07,1.11-2.65,1.11-4.72s-.37-3.65-1.11-4.73c-.73-1.08-1.88-1.63-3.41-1.63s-2.72.55-3.47,1.65c-.75,1.1-1.13,2.66-1.13,4.72s.37,3.63,1.13,4.71c.75,1.08,1.9,1.62,3.47,1.62Z"/></g></g></g></g>';
  /* search bar */
  o+='<g class="bar"><rect x="124.14" y="427.7" width="299.49" height="40" rx="20" fill="#fff" filter="url(#tcm-sh)"/>'+
     '<path d="M146.51,440.54v13.9M139.56,447.49h13.9" stroke="#25303b" stroke-width="1.6" fill="none"/>'+
     '<text class="q" id="tcm-q" x="175.38" y="452.1" opacity="1"></text><rect id="tcm-caret" x="175.38" y="438.5" width="1.6" height="17" fill="#1a2332" opacity="0"/>'+
     '<g id="tcm-go"><circle cx="402.66" cy="447.55" r="12.16" fill="'+BLUE+'"/><polyline points="397.84 446.69 402.66 441.86 407.49 446.69" fill="none" stroke="#fff" stroke-width="1.6"/><line x1="402.66" y1="441.86" x2="402.66" y2="453.23" stroke="#fff" stroke-width="1.6"/></g></g>';
  o+='</g>';
  svg.setAttribute('viewBox',(CX-W/2).toFixed(2)+' 0 '+W+' '+H);   /* canvas centred on the askTheco circle */
  svg.innerHTML=o;
  ['d','p'].forEach(function(k){var mp=el('.line.'+k+' .mp');paths[k]=mp;len[k]=mp.getTotalLength();
    E[k]={em:el('.endm[data-k='+k+']'),erip:el('.endm[data-k='+k+'] .erip'),sub:el('.endm[data-k='+k+'] .sub')};});
  DIN=(PY-63.12)-24.5; DASK=(CY-R)-24.5; DSW=430-24.5;   /* distances: spot enters plugin, enters askTheco, changes colour (hidden inside askTheco) */
  E.pool=[];for(var j=0;j<POOL;j++){var g=el('.dot[data-j="'+j+'"]');E.pool.push({g:g,sp:g.querySelector('.sp'),ics:[].slice.call(g.querySelectorAll('.ic'))});}
  E.q=el('#tcm-q');E.caret=el('#tcm-caret');E.ring=el('#tcm-ring');E.go=el('#tcm-go');E.goc=el('#tcm-go circle');
  E.pout=el('#tcm-pout');E.prip=el('#tcm-prip');E.pdisc=el('#tcm-pdisc');E.trip=el('#tcm-trip');
  paint();if(reduce)staticFrame();
}
function paint(){
  var f=hov||sel||'';if(f)root.setAttribute('data-f',f);else root.removeAttribute('data-f');
  [].forEach.call(svg.querySelectorAll('.endm'),function(c){var k=c.getAttribute('data-k');c.classList.toggle('sel',k===sel);c.setAttribute('aria-pressed',String(k===sel));});
}
function fill(k){
  if(!CFG.field)return;var nm=CFG.names[k];
  [].forEach.call(document.querySelectorAll('[name*="'+CFG.field+'"]'),function(e){
    try{
      if(e.tagName==='SELECT'){for(var i=0;i<e.options.length;i++){var op=e.options[i];if(op.text.trim()===nm||op.value===nm){e.value=op.value;break;}}}
      else if(e.type==='checkbox'||e.type==='radio'){var lab=(e.closest('label')||{}).textContent||'';if(lab.indexOf(nm)>-1||e.value===nm)e.checked=true;}
      else{var d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),'value');d&&d.set?d.set.call(e,nm):(e.value=nm);}
      ['input','change'].forEach(function(evn){e.dispatchEvent(new Event(evn,{bubbles:true}));});
    }catch(x){}
  });
}
function restart(){T0=null;ev={ask:-1,plug:-1,emit:-1,arr:{d:-1,p:-1}};}
function pick(k,go){
  sel=k;paint();restart();window.TCM_LINE=k;try{sessionStorage.setItem('tcm-line',k);}catch(e){}
  window.dispatchEvent(new CustomEvent('thecosystems:line',{detail:{id:k,name:CFG.names[k]}}));
  fill(k);setTimeout(function(){fill(k);},700);
  if(go&&CFG.scrollTo)setTimeout(function(){var s=CFG.scrollTo,t=document.querySelector(s)||document.querySelector('a[name="'+s.replace('#','')+'"]');if(t)t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});},380);
}
function grp(e){return e.target.closest&&(e.target.closest('.endm')||e.target.closest('.line'));}
svg.addEventListener('pointerover',function(e){var g=grp(e);hov=g?g.getAttribute('data-k'):null;paint();});
svg.addEventListener('pointerleave',function(){hov=null;paint();});
svg.addEventListener('click',function(e){var g=grp(e);if(g)pick(g.getAttribute('data-k'),true);});
svg.addEventListener('keydown',function(e){var c=e.target.closest&&e.target.closest('.endm');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();pick(c.getAttribute('data-k'),true);}});

/* ---- animation ---- */
var TYPE_MS=1500,HOLD_MS=2900,FADE_MS=700;
var CLICK_DELAY=380,CLICK_MS=950,GO_ON='#1a2332';   /* pause after typing, then the arrow 'click' flashes dark blue */
function mix(a,b,t){var x=parseInt(a.slice(1),16),y=parseInt(b.slice(1),16),c=[16,8,0].map(function(s){var p=x>>s&255,q=y>>s&255;return Math.round(p+(q-p)*t);});return 'rgb('+c.join(',')+')';}
function cl(x,a,b){return Math.max(a,Math.min(b,x));}
function ease(x){return 1-Math.pow(1-x,2);}
function branch(n){return sel||(n%2?'p':'d');}
function setDot(p,k,u,idx,age){
  var d=cl(u,0,1)*len[k],v=cl((REV-(len[k]-d))/70,0,1);   /* 0 = plain spot, 1 = full icon badge */
  p.sp.setAttribute('r',(K*(9.51+4.83*v)).toFixed(2));p.sp.setAttribute('fill',d<DSW?BLUE:COL[k]);
  p.ics.forEach(function(g,i){g.setAttribute('opacity',i===idx?cl((v-.55)/.45,0,1).toFixed(2):0);});
  var pt=paths[k].getPointAtLength(d);
  var s=Math.min(1,.4+age/350*.6)*(u>.985?Math.max(0,(1-u)/.015):1);
  p.g.setAttribute('transform','translate('+pt.x.toFixed(1)+','+pt.y.toFixed(1)+') scale('+s.toFixed(3)+')');p.g.setAttribute('opacity',s>.02?1:0);
}
function frame(now){
  if(started&&!reduce&&E.pool){
    if(T0===null)T0=now;
    var t=now-T0,used={},dur=Math.max(len.d,len.p)/SPEED;
    var nmax=Math.floor(t/GAP),nmin=Math.max(0,Math.ceil((t-dur-250)/GAP));
    for(var n=nmin;n<=nmax;n++){
      var age=t-n*GAP;if(age<0)continue;
      var k=branch(n),dk=len[k]/SPEED,u=age/dk,dist=age*SPEED,idx=SEQ[k][Math.floor(n/2)%6];
      if(n>ev.emit){ev.emit=n;emitT=now;}
      if(dist>=DIN&&n>ev.plug){ev.plug=n;plugT=now;}
      if(dist>=DASK&&n>ev.ask){ev.ask=n;ringT=now;if(typeT===null)typeT=now;}
      if(u>=1){if(n>ev.arr[k]){ev.arr[k]=n;SW[k].t=now;SW[k].pend=ACT[idx];onUntil[k]=now+1300;ripT[k]=now;}continue;}
      var p=E.pool[n%POOL];used[n%POOL]=1;setDot(p,k,u,idx,age);
    }
    E.pool.forEach(function(p,j){if(!used[j])p.g.setAttribute('opacity',0);});
    ['d','p'].forEach(function(k){var e=E[k];
      e.em.classList.toggle('on',now<onUntil[k]);
      var rp=(now-ripT[k])/1800;
      if(rp>=0&&rp<=1){e.erip.setAttribute('r',(11+26*ease(rp)).toFixed(1));e.erip.setAttribute('opacity',(.5*(1-rp)).toFixed(3));}else e.erip.setAttribute('opacity',0);
      /* copy under the end title changes to the activity that just arrived */
      var sw=SW[k];
      if(sw.pend){var q=(now-sw.t)/520;
        if(q>=.4&&e.sub.textContent!==sw.pend)e.sub.textContent=sw.pend;
        var f=q<.4?1-q/.4:Math.min(1,(q-.4)/.4);
        e.sub.setAttribute('opacity',(f*(now<onUntil[k]?1:.7)).toFixed(2));
        if(q>=1)sw.pend=null;}
      else e.sub.setAttribute('opacity',now<onUntil[k]?1:.7);
    });
    /* top node ripple as each spot sets off */
    var te=(now-emitT)/1200;
    if(te>=0&&te<=1){E.trip.setAttribute('r',(11+14*ease(te)).toFixed(1));E.trip.setAttribute('opacity',(.45*(1-te)).toFixed(3));}else E.trip.setAttribute('opacity',0);
    /* ChatGPT Plugin reaction: outline lights up and thickens, a ripple rolls outward, the disc gives a small pulse */
    var pe=(now-plugT)/PLUG_MS;
    if(pe>=0&&pe<=1){
      var hi=pe<.18?pe/.18:1-(pe-.18)/.82;
      E.pout.setAttribute('stroke-opacity',(.6*hi).toFixed(3));E.pout.setAttribute('stroke-width',(1+.6*hi).toFixed(2));
      E.prip.setAttribute('r',(PR+12*ease(pe)).toFixed(1));E.prip.setAttribute('opacity',(.22*(1-pe)).toFixed(3));
      var sc=1+.012*Math.sin(Math.min(pe/.45,1)*Math.PI);
      E.pdisc.setAttribute('transform','translate('+PX+',182.43) scale('+sc.toFixed(4)+') translate('+(-PX)+',-182.43)');
    }else{E.pout.setAttribute('stroke-opacity',0);E.pout.setAttribute('stroke-width',1);E.prip.setAttribute('opacity',0);E.pdisc.removeAttribute('transform');}
    /* askTheco emanating ring */
    var rr=(now-ringT)/2400;
    if(rr>=0&&rr<=1){E.ring.setAttribute('r',(R+(140-R)*ease(rr)).toFixed(1));E.ring.setAttribute('opacity',(.5*(1-rr)).toFixed(3));}else E.ring.setAttribute('opacity',0);
    /* search bar typing + arrow click */
    var n2=0,show=1,live=false,gs=1,gc=0;
    if(typeT!==null){
      var tt=now-typeT;
      if(!E.fitd){E.q.style.fontSize='16px';E.q.textContent=QUESTION;var qw=E.q.getComputedTextLength();if(qw>212)E.q.style.fontSize=(16*212/qw).toFixed(2)+'px';E.fitd=1;}
      if(tt<TYPE_MS){n2=Math.floor(tt/TYPE_MS*QUESTION.length);live=true;}
      else if(tt<TYPE_MS+HOLD_MS){n2=QUESTION.length;live=tt<TYPE_MS+800;}
      else if(tt<TYPE_MS+HOLD_MS+FADE_MS){n2=QUESTION.length;show=1-(tt-TYPE_MS-HOLD_MS)/FADE_MS;}
      else{typeT=null;E.fitd=0;n2=0;}
      var cp=tt-TYPE_MS-CLICK_DELAY;
      if(cp>=0&&cp<CLICK_MS){gs=1-.13*Math.sin(Math.min(cp/260,1)*Math.PI);gc=cp<90?cp/90:cp<520?1:1-(cp-520)/(CLICK_MS-520);}
    }
    E.q.textContent=QUESTION.slice(0,n2);E.q.setAttribute('opacity',cl(show,0,1).toFixed(2));
    if(live){var cw=n2?E.q.getComputedTextLength():0;E.caret.setAttribute('x',(175.38+cw+1).toFixed(1));E.caret.setAttribute('opacity',Math.floor(now/450)%2?0:.8);}else E.caret.setAttribute('opacity',0);
    E.go.setAttribute('transform','translate(402.66,447.55) scale('+gs.toFixed(3)+') translate(-402.66,-447.55)');E.goc.setAttribute('fill',gc>0?mix(BLUE,GO_ON,cl(gc,0,1)):BLUE);
  }
  requestAnimationFrame(frame);
}
function staticFrame(){
  [['d',0,.12],['d',3,.95],['p',2,.97]].forEach(function(a,i){setDot(E.pool[i],a[0],a[2],a[1],1000);});
  E.q.textContent=QUESTION;E.q.setAttribute('opacity',1);
}
build();
function start(){root.classList.add('go');setTimeout(function(){started=true;restart();},3600);}
window.TCM_REPLAY=function(){root.classList.remove('go');started=false;void root.offsetWidth;restart();typeT=null;E.pool.forEach(function(p){p.g.setAttribute('opacity',0);});['d','p'].forEach(function(k){E[k].sub.textContent=SUB0;SW[k].pend=null;});start();};
if('IntersectionObserver' in window&&!reduce){var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){start();io.disconnect();}},{threshold:.2});io.observe(root);}
else{root.classList.add('go');}
requestAnimationFrame(frame);
})();
