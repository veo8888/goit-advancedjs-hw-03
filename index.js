import{S as f,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const d="https://pixabay.com/api/",p="50732849-21223ac287faa79ee0d00336e";async function m(s){const r=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:20}),o=`${d}?${r}`;try{const e=await fetch(o);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw e}}let l;function y(s){const r=document.querySelector(".gallery"),o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}" title="${e.tags}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <ul class="info-list">
          <li><span>Likes</span><br>${e.likes}</li>
          <li><span>Views</span><br>${e.views}</li>
          <li><span>Comments</span><br>${e.comments}</li>
          <li><span>Downloads</span><br>${e.downloads}</li>
        </ul>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",o),l?l.refresh():l=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function h(){const s=document.querySelector(".gallery");s.innerHTML=""}const u=document.querySelector("#search-form");document.querySelector("#loader");u.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.searchQuery.value.trim();if(r===""){n.warning({message:"The field must not be empty",position:"topRight"});return}h(),c(!0),await new Promise(o=>setTimeout(o,1e3));try{const o=await m(r);if(c(!1),o.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"red"});return}y(o.hits)}catch(o){c(!1),n.error({message:`Error: ${o.message}`,position:"topRight"})}u.reset()});function c(s){const r=document.querySelector("#loader");r&&(s?r.classList.remove("hidden"):r.classList.add("hidden"))}
//# sourceMappingURL=index.js.map
