const feedContainer = document.getElementById('feed-container');

// مثال بيانات المنتجات (في النسخة MVP)
const products = [
  { id: 1, name: "سماعات بلوتوث", video: "Images/headphones.mp4", price: 45 },
  { id: 2, name: "ساعة ذكية", video: "Images/watch.mp4", price: 120 },
  { id: 3, name: "نظارات شمسية", video: "Images/glasses.mp4", price: 35 }
];

// إنشاء فيديوهات في Feed
products.forEach(product => {
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

// الانتقال إلى صفحة المنتج
function goToProduct(id) {
  window.location.href = `products.html?id=${id}`;
}

// تمرير الفيديوهات عند السحب مثل TikTok
let currentIndex = 0;
document.addEventListener('wheel', (e) => {
  if(e.deltaY > 0) currentIndex++;
  else currentIndex--;
  if(currentIndex < 0) currentIndex = 0;
  if(currentIndex >= products.length) currentIndex = products.length - 1;
  feedContainer.scrollTo({ top: window.innerHeight * currentIndex, behavior: 'smooth' });
});
