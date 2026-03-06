// feed.js
console.log("feed.js loaded"); // للتأكد من التحميل

const feedContainer = document.getElementById("feed-container");

const videos=[
{name:"سماعات", video:"https://www.w3schools.com/html/mov_bbb.mp4", price:120},
{name:"ساعة", video:"https://www.w3schools.com/html/movie.mp4", price:250},
{name:"كاميرا", video:"https://www.w3schools.com/html/mov_bbb.mp4", price:500}
];

function renderFeed(){
feedContainer.innerHTML='';
videos.forEach(v=>{
const div=document.createElement("div");
div.classList.add("video-item");
div.innerHTML=`
<video src="${v.video}" autoplay muted loop></video>
<div class="video-overlay">
<h3>${v.name}</h3>
<p>${v.price} د.ت</p>
<button class="buy-button" onclick="addToCart('${v.name}',${v.price})">اشتري الآن</button>
</div>`;
feedContainer.appendChild(div);
});
}
renderFeed();
