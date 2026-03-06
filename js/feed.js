document.addEventListener('DOMContentLoaded', () => {
  const feedContainer = document.getElementById('feed-container');

  // فيديوهات وهمية من الإنترنت
  const videos = [
    { id: 1, name: "سماعات بلوتوث", video: "https://www.w3schools.com/html/mov_bbb.mp4", price: 120 },
    { id: 2, name: "ساعة ذكية", video: "https://www.w3schools.com/html/movie.mp4", price: 250 },
    { id: 3, name: "كاميرا رقمية", video: "https://www.w3schools.com/html/mov_bbb.mp4", price: 500 }
  ];

  videos.forEach(product => {
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('video-item');
    videoDiv.innerHTML = `
      <video src="${product.video}" autoplay muted loop></video>
      <div class="video-overlay">
        <h3>${product.name}</h3>
        <p>${product.price} د.ت</p>
        <button class="buy-button" onclick="goToProduct(${product.id})">اشتري الآن</button>
      </div>
    `;
    feedContainer.appendChild(videoDiv);
  });

  function goToProduct(id) {
    window.location.href = `products.html?id=${id}`;
  }

  // تمرير الفيديوهات مثل TikTok
  let currentIndex = 0;
  document.addEventListener('wheel', (e) => {
    if(e.deltaY > 0) currentIndex++;
    else currentIndex--;
    if(currentIndex < 0) currentIndex = 0;
    if(currentIndex >= videos.length) currentIndex = videos.length - 1;
    feedContainer.scrollTo({ top: window.innerHeight * currentIndex, behavior: 'smooth' });
  });
});
