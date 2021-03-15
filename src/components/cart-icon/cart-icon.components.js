import React from 'react';

import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';
const CartIcon = ({ toggleCartHidden, cartItem }) => {
    const count = cartItem.length;
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <LocalMallTwoToneIcon className='shopping-icon' />
            <div className='item-count'>{count}</div>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = state => {
    return {
        cartItem: state.cart.cartItem
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);