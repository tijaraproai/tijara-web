// cart.js
console.log("cart.js loaded"); // للتأكد من التحميل

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function updateCartCount(){ /* يمكن إضافة عداد إذا أحببت */ }

function openCart(){document.getElementById("cartSidebar").style.right='0';renderCart();}
function closeCart(){document.getElementById("cartSidebar").style.right='-350px';}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
renderCart();
updateCartCount();
alert("تمت إضافة المنتج للسلة");
}

function renderCart(){
const cartItems=document.getElementById("cartItems");
const cartTotal=document.getElementById("cartTotal");
cartItems.innerHTML='';
let total=0;
cart.forEach((item,index)=>{
total+=item.price;
const div=document.createElement("div");
div.classList.add("cart-item");
div.innerHTML=`<span>${item.name} - ${item.price} د.ت</span><button onclick="removeItem(${index})">حذف</button>`;
cartItems.appendChild(div);
});
cartTotal.innerText='الإجمالي: '+total+' د.ت';
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cart));
renderCart();
updateCartCount();
}

function checkout(){
if(cart.length===0){alert('السلة فارغة');return;}
alert('تم الطلب بنجاح 🚀');
cart=[];localStorage.setItem("cart",JSON.stringify(cart));
renderCart();updateCartCount();
}

renderCart();
updateCartCount();
