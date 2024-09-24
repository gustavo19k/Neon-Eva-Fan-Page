(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(n){if(n.ep)return;n.ep=!0;const t=a(n);fetch(n.href,t)}})();const l="/Neon-Eva-Fan-Page/trio.png";let c=()=>{const e=document.createElement("div");e.id="container-main";const o={trailer:"https://www.youtube.com/watch?v=9Vr9PxiuH6w"},a={paragraphMain:"Um dia, Shinji Ikari é recrutado por seu pai, Gendo, para a misteriosa organização NERV. Ele é jogado em um mundo ameaçado por seres monstruosos conhecidos como Anjos. Shinji, junto com outros adolescentes, Rei Ayanami e Asuka Sohryu, são os únicos capazes de pilotar as gigantescas máquinas biomecânicas chamadas Evangelions e combater os Anjos. No entanto, a batalha contra os Anjos é apenas a superfície. À medida que a luta continua, os pilotos são chamados para entender a causa final dos eventos e os motivos por trás das ações humanas. Eles são forçados a enfrentar suas próprias emoções e experiências, levando a questionamentos sobre a realidade e a existência. É então quando Shinji é confrontado com a verdade sobre os Evangelions e a NERV, e ele deve fazer tudo o que puder para deter os Anjos e reestabelecer a paz.",buttonMain:"Ver FIlmes",buttonAux:"Assistir ao trailer"};return e.innerHTML=`<main id="main">
        <div class="main__info">
          <p class="paragraphMain">
            ${a.paragraphMain}
          </p>
          <div>
            <a class="buttonMain" href="${o.trailer}" target="_blank">${a.buttonAux}</a>
            <button class="buttonAux" type="button" onclick="window.open('https://neongenesisevangelion.fandom.com/pt-br/wiki/Neon_Genesis_Evangelion#Composi%C3%A7%C3%A3o','_blank');">${a.buttonMain}</button>
          </div>
        </div>
        <img class="simple-image" id="Trio" src="${l}" alt="Simples foto dos três protagonistas do Anime.">
      </main>`,e};function d(){const e=document.createElement("div");e.id="spinner",document.body.appendChild(e),document.body.classList.add("loading");function o(){document.readyState==="complete"?(document.body.classList.remove("loading"),e.remove()):setTimeout(o,100)}o()}const m="/Neon-Eva-Fan-Page/evangelion-logo.png",u="/Neon-Eva-Fan-Page/github.svg",p="/Neon-Eva-Fan-Page/instagram.svg",g="/Neon-Eva-Fan-Page/figma.svg",s={home:"index.html",story:"https://neongenesisevangelion.fandom.com/pt-br/wiki/Neon_Genesis_Evangelion#Composi%C3%A7%C3%A3o",trailer:"https://www.youtube.com/watch?v=9Vr9PxiuH6w",github:"https://github.com/gxstavo19k",instagram:"",figma:""},v=()=>{let e=document.createElement("nav");return e.className="navigation",e.innerHTML=`
    <ul class="navigation__links">
      <li>
        <a href="${s.home}" class="navigation__link">Home</a>
      </li>
      <li>
        <a href="${s.story}" class="navigation__link" target="_blank">Story</a>
      </li>
      <li>
        <a href="${s.trailer}" target="_blank" class="navigation__link" title="trailer do anime no YT">Trailer</a>
      </li>
    </ul>
    <div class="navigation__social">
      <a href="${s.github}" title="Link do repositório deste projeto">
        <img id="github-logo"
          src="${u}"
          alt="GitHub">
      </a>
      <a href="${s.instagram}" target="_blank" title="Link do meu perfil Instagram.">
        <img src="${p}" alt="Instagram">
      </a>
      <a href="${s.figma}" target="_blank">
        <img src="${g}" alt="Link do figma" title="Link do projeto no Figma deste site.">
      </a>
    </div>
    `,e},f=()=>{const e=document.createElement("button");e.type="button",e.id="button",e.className="button__mobile",e.title="Botão para mobile",e.innerHTML=`
    <span></span>
    <span></span>
    <span></span>
    `;const o=v();function a(){if(console.log("botão clicado"),e.classList.toggle("active"),e.classList.contains("active")?document.body.style.overflow="hidden":document.body.style.overflow="",o){o.classList.toggle("active");const i=document.querySelector(".main__info div");o.classList.contains("active")?i.style.display="none":i.style.display="inherit"}}return e.addEventListener("click",a),{buttonElement:e,navigation:o}},h=()=>{const e=document.createElement("header");e.id="header",e.innerHTML=`<img class="logo"
    src="${m}"
    alt="Evangelion Anime's Logo"
    aria-label="Logo do Anime Evangelion"
    title="Evangelion Logo" />
    `;const{buttonElement:o,navigation:a}=f();return e.appendChild(o),e.appendChild(a),e},b=()=>{let e="https://github.com/gustavo19k/assets-SouKick/raw/main/1o-projeto-web/background-video.mp4",o=document.createElement("div");return o.className="bg-video",o.innerHTML=` <video class="video" autoplay muted loop>
         <source src="${e}" type="video/mp4" />
       </video>`,o};addEventListener("DOMContentLoaded",()=>{d();const e=document.querySelector("#app"),o=h(),a=c(),i=b();e.appendChild(o),e.appendChild(i),e.appendChild(a)});
