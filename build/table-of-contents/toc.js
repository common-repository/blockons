document.addEventListener("DOMContentLoaded",(function(){function t(t){return t.trim().toLowerCase()}function e(t){t.preventDefault();const e=t.currentTarget.getAttribute("href").substring(1),o=document.getElementById(e);if(o){const t=50,e=o.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo({top:e,behavior:"smooth"})}}document.querySelectorAll(".blockons-toc-link").forEach(((e,o)=>{const n=t(e.textContent);let c=null;if(document.querySelectorAll(".wp-block-heading").forEach((e=>{t(e.textContent)===n&&(c=e)})),c){const t=c.textContent.trim().toLowerCase().replace(/\s+/g,"-")+"-"+o;c.id=t,e.href="#"+t}})),document.querySelectorAll(".blockons-toc-link").forEach((t=>{t.addEventListener("click",e)}))}));