document.addEventListener("DOMContentLoaded", function () {

const feedContainer = document.getElementById("feed-container");

if (!feedContainer) return;

const videoHTML = `
<div class="video-item">
<video autoplay muted loop playsinline>
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
</video>

<div class="video-overlay">
<h2>منتج ترند 🔥</h2>
<button class="buy-button">اشتر الآن</button>
</div>
</div>
`;

feedContainer.innerHTML = videoHTML;

});
