document.addEventListener("DOMContentLoaded", function(){

const feedContainer = document.getElementById("feed-container");

feedContainer.innerHTML = `
<div class="video-item">
<img src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd" style="width:100%;height:100%;object-fit:cover;">
<div class="video-overlay">
<h2>منتج ترند</h2>
<button class="buy-button">اشتر الآن</button>
</div>
</div>
`;

});
