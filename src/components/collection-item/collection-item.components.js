import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.components';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import { withRouter } from 'react-router-dom';
class CollectionItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
    }
    onClick = (event) => {
        if (this.props.inside) {

            this.props.addItem(this.props.item);
        }
        else {
            alert("Please Signin to add");
            this.props.history.push('/signin')
        }
    }

    render() {
        const { imageUrl, name, price } = this.props.item;

        return (
            <div className='collection-item'>
                <div className='image' style={{ backgroundImage: `url(${imageUrl})` }
                } />
                <div className='collection-footer'>
                    <span className='name'>
                        {name}
                    </span>
                    <span className='price'>
                        {price}
                    </span>
                </div>
                <CustomButton className='custom-button' onClick={this.onClick} inverted>ADD TO CART</CustomButton>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
const mapStateToProps = state => {
    return {
        inside: state.cart.inside
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionItem));