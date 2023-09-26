// import Cors from 'micro-cors';
// import stripeInit from 'stripe';
// import verifyStripe from '@webdeveducation/next-verify-stripe';
// import { connectToDatabase } from '../../lib/mongodb';



// const cors = Cors({
//   allowMethods: ['POST', 'HEAD']
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   }
// };


// const stripe = stripeInit(process.env.STRIPE_SECRET_KEY);
// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// const handler = async (req , res) =>{
//     if (req.method === 'POST') {
//     let event;
//     try {
//       event = await verifyStripe({
//         req,
//         stripe,
//         endpointSecret
//       });
//     } catch (error) {
//       console.error('Error verifying Stripe event:', error);
//       return res.status(400).json({ error: 'Webhook verification failed' });
//     };

//      switch (event.type) {
//       case 'payment_intent.succeeded':{
        
//           const client = await connectToDatabase();
//           const db = client.db("ContentClimb");
//           const paymentIntent = event.data.object;
//           const auth0Id = paymentIntent.metadata.sub;

//           // Check if auth0Id is correct and corresponds to a user
          
//             const userProfile = await db.collection('users').updateOne(
//               {
//                 auth0Id,
//               },
//               {
//                 $inc: {
//                   availableTokens: 10
//                 },
//                 $setOnInsert: {
//                   auth0Id,
//                 }
//               },
//               {
//                 upsert: true
//               }
//             );
          
        
//      }

//       default:
//         console.log('UNHANDLED EVENT', event.type);
//     }

//    res.status(200).json({received: true})

// }



// }



// export default cors(handler);