import { getSession } from "@auth0/nextjs-auth0";
import { connectToDatabase } from '../../lib/mongodb';
import StripeInit from 'stripe'

const stripe = StripeInit (process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  try {
    const { user } = await getSession(req, res);
    console.log('user:', user);

    const lineItems =[{
      price: process.env.STRIPE_PRODUCTC_ID,
      quantity : 1,
    }];
    
    const protocol = process.env.NODE_ENV === 'development' ? "http://" : "https://";
    const host = req.headers.host;

  const checkoutSession = await stripe.checkout.sessions.create({
      line_items : lineItems,
      mode: "payment",
      success_url : `${protocol}${host}/success`
  })


    const client = await connectToDatabase();
    const db = client.db("ContentClimb");

    const userProfile = await db.collection("users").updateOne(
      {
        auth0Id: user.sub
      },
      { 
        $inc: {
          availableTokens: 50
        },
        $setOnInsert: {
          auth0Id: user.sub,
          plan : "Mega"
        }
      },
      {
        upsert: true
      }
    );

    res.status(200).json({ session: checkoutSession});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
