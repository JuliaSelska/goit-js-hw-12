import{a as b,S as v,i as h}from"./assets/vendor-4dYZuk4Q.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const u=t=>`
    <li class="gallery-card">
      <a class="gallery-link"  href="${t.largeImageURL}">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /> 
        <ul class="text-info">
          <li class="image-info">
            <h4>Likes</h4>
            <p>${t.likes}</p>
          </li>
          <li class="image-info">
            <h4>Views</h4>
            <p>${t.views}</p>
          </li>
          <li class="image-info">
            <h4>Comments</h4>
            <p>${t.comments}</p>
          </li>
          <li class="image-info">
            <h4>Downloads</h4>
            <p>${t.downloads}</p>
        </ul>
        </a>
    </li>
  `,m=(t,r)=>{const o=new URLSearchParams({q:t,key:"48482195-738aed504c51f4c8c5e491b18",image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15});return b.get(`https://pixabay.com/api/?${o}`,o)},f=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),i=document.querySelector(".load-more-btn"),g=new v(".js-gallery a"),l=document.querySelector(".loader");let n=1,p="",y=15;l.classList.add("hidden");i.classList.add("is-hidden");const w=async t=>{try{t.preventDefault();const r=t.currentTarget.elements.user_query.value.trim();if(r===""){h.error({title:"",message:"Please enter your request",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"});return}n=1,p=r,l.classList.remove("hidden");const{data:o}=await m(r);if(o.total===0){h.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"}),c.innerHTML="",f.reset();return}o.totalHits>y?(i.classList.remove("is-hidden"),i.addEventListener("click",L)):i.classList.add("is-hidden");const a=o.hits.map(e=>u(e)).join("");c.innerHTML=a,g.refresh()}catch(r){console.log(r)}finally{l.classList.add("hidden")}},L=async()=>{try{n++,l.classList.remove("hidden");const{data:t}=await m(p,n),r=t.hits.map(e=>u(e)).join("");c.insertAdjacentHTML("beforeend",r),g.refresh();let a=c.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"}),n*y>=t.totalHits&&(i.classList.add("is-hidden"),h.show({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}),i.removeEventListener("click",L))}catch(t){console.log(t)}finally{l.classList.add("hidden")}};f.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
