import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import CarTItem from '../cart-item/cart-item.component'
import './cart-box.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';
class CartBOX extends React.Component {
    constructor(props) {
        super(props);
    }
    onClick = (event) => {
        if (this.props.inside) {
            this.props.toggleCartHidden();
            this.props.history.push('/checkout');
        }
        else {
            alert("you are not signin");
            this.props.history.push('/signin');
        }

    }
    render() {
        const { cartItem, history } = this.props;
        return (

            <div className='cart-box' >
                {cartItem.length ?
                    (<div className='cart-items'>
                        {cartItem.map(ele => (<CarTItem key={ele.id} item={ele} />))}
                    </div>) : <div className='add'>ADD ITEM TO SEE</div>}
                <CustomButton onClick={this.onClick}>GO TO CHECKOUT</CustomButton>
            </div>


        )
    }


};
const mapStateToProps = (state) => {
    return {
        cartItem: state.cart.cartItem,
        inside: state.cart.inside,
    }
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartBOX));