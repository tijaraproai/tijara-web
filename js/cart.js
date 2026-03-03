let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart(){
const container = document.getElementById("cart-container");
const totalEl = document.getElementById("total");

container.innerHTML = "";
let total = 0;

cart.forEach((item,index)=>{
total += item.price;

container.innerHTML += `
<div class="cart-item">
<h3>${item.name}</h3>
<p>${item.price} د.ت</p>
<button onclick="removeItem(${index})">حذف</button>
</div>
`;
});

totalEl.innerText = "الإجمالي: " + total + " د.ت";
}

function removeItem(index){
cart.splice(index,1);
saveCart();
renderCart();
}

function checkout(){
if(cart.length === 0){
alert("السلة فارغة");
return;
}
alert("تم الطلب بنجاح 🚀");
cart = [];
saveCart();
renderCart();
}

renderCart();
