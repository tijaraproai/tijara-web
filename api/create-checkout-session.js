import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // المفتاح السري من Environment Variable

export default async function handler(req, res){
  if(req.method==='POST'){
    const {cart} = req.body;
    const line_items = cart.map(item => ({
      price_data: {
        currency: 'tnd',
        product_data: {name: item.name},
        unit_amount: item.price * 100
      },
      quantity: 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.headers.origin}/success.html`,
      cancel_url: `${req.headers.origin}/cart.html`
    });

    res.status(200).json({id: session.id});
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
