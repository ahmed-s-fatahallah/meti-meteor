function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},l=o.parcelRequirea92c;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},o.parcelRequirea92c=l),l.register("27Lyk",(function(t,o){var n,r;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var l={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},r=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l("27Lyk").register(JSON.parse('{"eothL":"index.a40a191a.js","5gvP2":"start.84b462c6.mp3","jXX44":"win.561dbf0f.mp3","lnKnk":"lose.08a9d0e5.mp3","hu1To":"shake.9d3e358d.mp3","fOBnN":"destroySound.659c323d.mp3","aVhgA":"blue-meteor-nobg.a8e8b44e.png","cuxV2":"yellow-meteor.3ad3aa57.png"}'));var s,i={mainSectionEl:document.querySelector(".main"),gameSectionEl:document.querySelector(".section-game"),heroSectionEl:document.querySelector(".hero-section"),rulesEl:document.querySelector(".rules"),rulesBtn:document.querySelector(".rules-btn"),closeRulesBtn:document.querySelector(".close_rules--btn"),tilesArry:Array.from(document.querySelectorAll(".tile")),turnNumEl:document.querySelector(".turn-num"),meteorsContainerEl:document.querySelector(".meteors-container"),meteorHolderEl:document.querySelector(".meteor-holder"),middleTile:document.querySelector(".middle"),popUp:document.querySelector(".pop-up"),restartBtn:document.querySelector(".restart-btn"),copyRight:document.querySelector(".year"),startPlayingBtn:document.querySelector(".play-btn"),topBtn:document.querySelector(".top-btn"),resetBtn:document.querySelector(".reset-btn"),volumeInputEl:document.querySelector("#volume"),volumeLevelEl:document.querySelector(".volume-level"),volumeMuteEl:document.querySelector("#mute")};s=new URL(l("27Lyk").resolve("5gvP2"),import.meta.url).toString();var u;u=new URL(l("27Lyk").resolve("jXX44"),import.meta.url).toString();var c;c=new URL(l("27Lyk").resolve("lnKnk"),import.meta.url).toString();var a;a=new URL(l("27Lyk").resolve("hu1To"),import.meta.url).toString();var d;d=new URL(l("27Lyk").resolve("fOBnN"),import.meta.url).toString();const m=new Audio(t(s)),p=new Audio(t(u)),f=new Audio(t(c)),y=new Audio(t(a)),v=new Audio(t(d)),h=.121,E=function(){return Math.trunc(3*Math.random()+3)},g=function(){return(new Date).getFullYear()};var b;b=new URL(l("27Lyk").resolve("aVhgA"),import.meta.url).toString();var L;L=new URL(l("27Lyk").resolve("cuxV2"),import.meta.url).toString();let C,w,S,x,A,H,B,k=E(),q=5;const T=function(e,t){if(w=e.clientX,S=e.clientY,t.classList.contains("yellow")){if(void 0!==H&&void 0!==B)return;H=parseInt(getComputedStyle(t).top),B=parseInt(getComputedStyle(t).left)}void 0!==x&&void 0!==A||(x=parseInt(getComputedStyle(t).top),A=parseInt(getComputedStyle(t).left))},R=function(e,t){let o,n;if(t){if("touchmove"===e.type&&(o=e.touches[0].clientX-w,n=e.touches[0].clientY-S),"mousemove"===e.type&&(o=e.clientX-w,n=e.clientY-S),t.classList.contains("yellow"))return t.style.top=H+n+"px",void(t.style.left=B+o+"px");t.style.top=x+n+"px",t.style.left=A+o+"px"}},_=function(e){e.style.pointerEvents="none",setTimeout((()=>{e.style.top=x+"px",e.style.left=A+"px",e.classList.contains("yellow")&&(e.style.top=H+"px",e.style.left=B+"px"),e.style.pointerEvents="all"}),500)},U=function(e,t){let o,n=e.getBoundingClientRect();const r=t.getBoundingClientRect(),l=M(n),s=I(n),i=F(r),u=O(n),c=document.elementsFromPoint(...u).filter((e=>e.classList.contains("tile")));if(0===c.length)return;if(e.classList.contains("blue")){o=l.map((e=>document.elementFromPoint(...e))).filter((e=>e.classList.contains("tile"))).concat(c)}else{o=l.concat(s).concat(i).map((e=>document.elementFromPoint(...e))).filter((e=>null!==e&&e.classList.contains("tile"))).concat(c)}return Array.from(new Set(Array.from(o)))},M=function(e){const[t,o]=[e.left+e.width/2,e.top-1],[n,r]=[e.right-e.width/2,e.bottom],[l,s]=[e.left-1,e.bottom-e.height/2],[i,u]=[e.right,e.bottom-e.height/2];return[[t,o],[n,r],[l,s],[i,u]]},I=function(e){const[t,o]=[e.left+e.width*h,e.top+e.width*h],[n,r]=[e.right-e.width*h,e.top+e.width*h],[l,s]=[e.left+e.width*h,e.bottom-e.width*h],[i,u]=[e.right-e.width*h,e.bottom-e.width*h];return[[t,o],[n,r],[l,s],[i,u]]},O=function(e){const[t,o]=[e.left+e.width/2,e.top+e.height/2];return[t,o]},F=function(e){const[t,o]=[e.left+e.width/2,e.top-1],[n,r]=[e.right-e.width/2,e.bottom],[l,s]=[e.left-1,e.bottom-e.height/2],[i,u]=[e.right,e.bottom-e.height/2];return[[t,o],[n,r],[l,s],[i,u]]},P=function(e){let o="",n=`<div class="meteor blue">\n  <img src="${t(b)}" alt="blue meteor image" />\n</div>\n`;for(let t=0;t<e;t++)o+=n;return o};C=P(k);const N=function(e){return e.querySelectorAll(".meteor").length?{turnsCount:q}:(q--,3===q?{turnsCount:q,meteorsHTML:`<div class="meteor yellow">\n      <img class= "yellow-inner" src="${t(L)}" alt="yellow meteor image" />\n    </div>`}:(k=E(),C=P(k),{turnsCount:q,meteorsHTML:C}))},D=function(e,t){let o=0;return!!t.classList.contains("destroyed")||(e.forEach((e=>{e.classList.contains("destroyed")&&o++})),o>=4||void 0)},j=function(e){return q=5,k=E(),C=P(k),e.forEach((e=>{e.classList.contains("destroyed")&&e.classList.remove("destroyed"),e.firstElementChild.textContent=3,e.style.borderColor="rgb(54, 48, 158)",e.classList.contains("middle")&&(e.firstElementChild.textContent=4)})),{turnsCount:q,meteorsHTML:C}},Y=function(e,t){e&&e.forEach((e=>{let o=+e.firstElementChild.textContent;e.classList.add("shake"),setTimeout((()=>{e.classList.remove("shake")}),800),t.classList.contains("yellow")?e.firstElementChild.textContent=o-3:e.firstElementChild.textContent=o-1,2==+e.firstElementChild.textContent&&(e.style.borderColor="rgb(255,215,0)",y.play()),1==+e.firstElementChild.textContent&&(e.style.borderColor="rgb(255,0,0)",y.play()),+e.firstElementChild.textContent<=0&&(e.classList.add("destroyed"),v.play())}))},X=function(e,t){i.turnNumEl.textContent=t?"GAME OVER":`Turn: ${e}`},V=function(e){i.meteorsContainerEl.insertAdjacentHTML("afterbegin",e),i.meteorHolderEl.insertAdjacentElement("afterbegin",i.meteorsContainerEl.firstChild),i.meteorHolderEl.firstChild.classList.add("move")};let W,$,K=50;const G=function(e,t,o,n){const r=r=>{let l;if("touchend"===r.type&&r.targetTouches.length>1||"mouseup"===r.type&&0!==r.button)return;if("mouseup"===r.type&&r.preventDefault(),W=!1,$=r.target.closest(".move"),!$)return;const s=t($,r.target.firstElementChild);if(!s)return void e($);i.startPlayingBtn.textContent="CONTINUE",i.resetBtn.style.visibility="visible",i.resetBtn.style.pointerEvents="all",Y(s,$),$.remove(),i.meteorsContainerEl.querySelectorAll(".meteor").length&&(i.meteorHolderEl.insertAdjacentElement("afterbegin",i.meteorHolderEl.previousElementSibling),i.meteorHolderEl.firstChild.classList.add("move"));let u=o(i.meteorsContainerEl);const c=n(i.tilesArry,i.middleTile);if(c||0===u.turnsCount)return a=c,d=u.turnsCount,l=a?(i.popUp.firstChild.textContent="YOU LOST 😞😔",i.restartBtn.style.backgroundColor="rgba(255, 0, 0, 0.8)",i.restartBtn.style.borderColor="rgba(255, 0, 0, 0)",i.popUp.showModal(),f.play(),!0):d<=0&&!a?(i.popUp.firstChild.textContent="YOU WON 🎉🎉",i.restartBtn.style.backgroundColor="rgba(0, 145, 0, 0.8)",i.restartBtn.style.borderColor="rgba(255, 0, 0, 0)",i.popUp.showModal(),p.play(),!0):void 0,void X(u.turnsCount,l);var a,d;u.meteorsHTML&&(V(u.meteorsHTML),X(u.turnsCount,l))};["mouseup","touchend"].forEach((e=>{document.addEventListener(e,r)}))};var J,z,Q,Z;J=g,i.copyRight.textContent=J(),V(C),function(e){const t=t=>{"touchdown"===t.type&&t.targetTouches.length>1||"mousedown"===t.type&&0!==t.button||($=t.target.closest(".move"),$&&("mousedown"===t.type&&(t.preventDefault(),e(t,$)),"touchstart"===t.type&&e(t.touches[0],$),W=!0))};["mousedown","touchstart"].forEach((e=>{document.addEventListener(e,t)}))}(T),function(e){const t=t=>{"touchmove"===t.type&&t.targetTouches.length>1||"mousemove"===t.type&&0!==t.button||W&&e(t,$)};["mousemove","touchmove"].forEach((e=>{document.addEventListener(e,t)}))}(R),G(_,U,N,D),X(q),i.startPlayingBtn.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo(0,document.body.scrollHeight),m.play()})),i.rulesBtn.addEventListener("click",(e=>{e.preventDefault(),i.rulesEl.showModal()})),i.closeRulesBtn.addEventListener("click",(e=>{e.preventDefault(),i.rulesEl.close()})),i.topBtn.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo(0,0),m.pause()})),z=i.heroSectionEl,Q=i.topBtn,new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?Q.style.display="none":Q.style.display="block"}))}),{root:null,threshold:.3}).observe(z),function(e){const t=t=>{if("keydown"===t.type&&"Escape"!==t.key||"click"===t.type&&0!==t.button)return;t.preventDefault(),i.resetBtn.style.visibility="hidden",i.resetBtn.style.pointerEvents="none",i.popUp.close();const{turnsCount:o,meteorsHTML:n}=e(i.tilesArry);i.meteorsContainerEl.querySelectorAll(".meteor").forEach((e=>{e.remove()})),X(o),V(n),m.play(),i.startPlayingBtn.textContent="PLAY NOW"};i.restartBtn.addEventListener("click",t),i.popUp.addEventListener("keydown",t)}(j),Z=j,i.resetBtn.addEventListener("click",(e=>{e.preventDefault(),i.resetBtn.style.visibility="hidden",i.resetBtn.style.pointerEvents="none";const{turnsCount:t,meteorsHTML:o}=Z(i.tilesArry);i.meteorsContainerEl.querySelectorAll(".meteor").forEach((e=>{e.remove()})),m.play(),i.startPlayingBtn.textContent="PLAY NOW",X(t),V(o)})),[m,y,v,p,f].forEach((e=>{e.volume=.5})),document.addEventListener("input",(e=>{if(e.target===i.volumeInputEl)return K=i.volumeLevelEl.value=e.target.value,void[m,y,v,p,f].forEach((e=>{e.volume=K/100}));i.volumeMuteEl.checked?(i.volumeLevelEl.value=i.volumeInputEl.value=0,i.volumeInputEl.style.pointerEvents="none",i.volumeInputEl.tabIndex=-1):(i.volumeLevelEl.value=i.volumeInputEl.value=K,i.volumeInputEl.style.pointerEvents="all",i.volumeInputEl.tabIndex=0),[m,y,v,p,f].forEach((e=>{e.volume=i.volumeLevelEl.value/100}))}));
//# sourceMappingURL=index.a40a191a.js.map
