// import stripe from './stripe';

// const basicStripeInit = async () => {
//   const product = await stripe.products.create({
//     name: 'Credits',
//   });
//   if (!product) {
//     console.log('Error in basic init');
//     return;
//   }
//   const price = await stripe.prices.create({
//     currency: 'INR',
//     product: product.id,
//     custom_unit_amount: {
//       minimum: 100,
//       maximum: 1000,
//       enabled: true,
//     },
//   });
// };

// export default basicStripeInit;
