import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100 / 70;
    const Publishkey = 'pk_test_51ITqcUKr4GIGwlLKxX0GNCJUW16zkmKz6bLLjvQBUpv4rDkGykRB01xgFtcEmBzXU0Hj7N3BbwL4QseRs5DwbuyL00GPRwLMX6';
    const Totoken = token => {
        console.log(token);
        alert('Payment Successful');
    }



    return (
        <StripeCheckout
            name='UNBEAT01'
            image='https://stripe.com/img/documentation/checkout/marketplace.png'
            label='Pay Now'
            billingAddress
            shippingAddress
            description={`Total To Pay Is (INR) ${price}`}
            amount={priceForStripe}
            panelLabel="PAY NOW"
            token={Totoken}
            stripeKey={Publishkey}
        />//stripe checkout gitHub page pai checkkar..
    )
}

export default StripeCheckoutButton;