import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import CarTItem from '../cart-item/cart-item.component'
import './cart-box.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class CartBOX extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cartItem, history } = this.props;
        return (

            <div className='cart-box' >
                {cartItem.length ?
                    (<div className='cart-items'>
                        {cartItem.map(ele => (<CarTItem key={ele.id} item={ele} />))}
                    </div>) : <div className='add'>ADD ITEM TO SEE</div>}
                <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
            </div>


        )
    }


};
const mapStateToProps = (state) => {
    return { cartItem: state.cart.cartItem }
}


export default withRouter(connect(mapStateToProps)(CartBOX));