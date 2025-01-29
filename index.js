import{a as u,S as d,i}from"./assets/vendor-4dYZuk4Q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m=r=>`
    <li class="gallery-card">
      <a class="gallery-link"  href="${r.largeImageURL}">
        <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" /> 
        <ul class="text-info">
          <li class="image-info">
            <h4>Likes</h4>
            <p>${r.likes}</p>
          </li>
          <li class="image-info">
            <h4>Views</h4>
            <p>${r.views}</p>
          </li>
          <li class="image-info">
            <h4>Comments</h4>
            <p>${r.comments}</p>
          </li>
          <li class="image-info">
            <h4>Downloads</h4>
            <p>${r.downloads}</p>
        </ul>
        </a>
    </li>
  `,h=(r,t)=>{const s=new URLSearchParams({q:r,key:"48482195-738aed504c51f4c8c5e491b18",image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return u.get(`https://pixabay.com/api/?${s}`,s)},n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),f=document.querySelector(".load-more-btn"),p=new d(".js-gallery a"),y=async r=>{try{const t=document.querySelector(".loader");if(r.preventDefault(),r.currentTarget.elements.user_query.value.trim()===""){i.error({title:"",message:"Please enter your request",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"});return}}catch(t){console.log(t)}document.querySelector(".loader").classList.remove("hidden"),f.classList.add("hidden"),h(searchedQuery).then(t=>{if(t.total===0){i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"}),c.innerHTML="",n.reset();return}const s=t.hits.map(a=>m(a)).join("");c.innerHTML=s,p.refresh()}).catch(t=>{console.log(t)}).finally(()=>{loader.classList.add("hidden")})};n.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
