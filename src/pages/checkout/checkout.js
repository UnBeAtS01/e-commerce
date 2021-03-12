import React from 'react';
import './checkout.styles.scss';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import Product from '../../components/productlist/product.component';
import StripeCheckoutButton from '../../components/payment/payment.components';
import { toggleCartHidden } from '../../redux/cart/cart.action';
const CheckoutPage = ({ cartItem }) => {
    var sum = 0;
    cartItem.map(cartele => {
        sum += (cartele.price) * cartele.quantity
        return cartele
    })
    return (
        <div className='checkout-page'>

            <div className='checkout-header'>
                <div className='item'>
                    <span >Item</span>
                    <div className='description'>
                        <span >(Description)</span>
                    </div>
                </div>
                <div className='quantity'>
                    <span >quantity</span>
                </div>
                <div className='price'>
                    <span >price</span>
                </div>
                <div className='Remove'>
                    <span >Remove</span>
                </div>

            </div>
            <div className='items'>
                {cartItem.map(cartele => <Product key={cartele.id} cartele={cartele} />)}
            </div>
            <div className='total'>
                TOTAL:{sum}
            </div>
            <div style={{ color: "BLUE" }}>CREDIT CARD 4242 4242 4242 4242 exp:01/22 cvw:123</div>
            <StripeCheckoutButton price={sum} />
        </div >
    )
}
const mapStateToProps = state => {
    return {
        cartItem: state.cart.cartItem
    }
}


export default connect(mapStateToProps)(CheckoutPage);