const feedContainer = document.getElementById("feed-container");

const videos = [
{
name:"سماعات بلوتوث",
price:120,
video:"https://www.w3schools.com/html/mov_bbb.mp4"
},
{
name:"ساعة ذكية",
price:250,
video:"https://www.w3schools.com/html/movie.mp4"
}
];

function renderFeed(){

videos.forEach(v=>{

const div = document.createElement("div");
div.className = "video-item";

div.innerHTML = `
<video autoplay muted loop playsinline>
<source src="${v.video}" type="video/mp4">
</video>

<div class="video-overlay">
<h3>${v.name}</h3>
<p>${v.price} د.ت</p>
<button class="buy-button" onclick="addToCart('${v.name}',${v.price})">
اشتري الآن
</button>
</div>
`;

feedContainer.appendChild(div);

});

}

renderFeed();
