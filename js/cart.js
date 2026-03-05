// جلب السلة من LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// حفظ السلة وتحديث العداد
function saveCart(){localStorage.setItem("cart",JSON.stringify(cart)); updateCartCount();}

// تحديث عداد المنتجات في Navbar
function updateCartCount(){document.getElementById('cartCount').innerText=cart.length;}

// عرض محتويات السلة
function renderCart(){
    const container=document.getElementById("cartItems");
    const totalEl=document.getElementById("cartTotal");
    container.innerHTML="";
    let total=0;
    cart.forEach((item,index)=>{
        total+=item.price;
        const div=document.createElement("div");
        div.className="cart-item";
        div.innerHTML=`<span>${item.name} - ${item.price} د.ت</span>
                       <button onclick="removeItem(${index})">حذف</button>`;
        container.appendChild(div);
    });
    totalEl.innerText="الإجمالي: "+total+" د.ت";
}

// حذف منتج
function removeItem(index){cart.splice(index,1); saveCart(); renderCart();}

// الدفع عبر Stripe
const stripe = Stripe('pk_test_XXXXXXXXXXXXXXXX'); // ضع مفتاحك العام هنا
document.getElementById("checkoutBtn")?.addEventListener("click", async ()=>{
    if(cart.length===0){alert("السلة فارغة"); return;}
    const response = await fetch('/api/create-checkout-session',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({cart})
    });
    const session = await response.json();
    const result = await stripe.redirectToCheckout({sessionId:session.id});
    if(result.error) alert(result.error.message);
});

// الدفع عبر PayPal
paypal.Buttons({
    createOrder:(data,actions)=>{
        const total=cart.reduce((sum,item)=>sum+item.price,0);
        return actions.order.create({purchase_units:[{amount:{value:total}}]});
    },
    onApprove:(data,actions)=>actions.order.capture().then(details=>{
        alert('✅ تم الدفع بواسطة PayPal. شكراً لك، '+details.payer.name.given_name);
        cart=[];
        saveCart();
        renderCart();
    })
}).render('#paypal-button-container');

// رندر أولي عند فتح الصفحة
renderCart();
updateCartCount();
