import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.components';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
class CollectionItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {

        // }
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
                <CustomButton className='custom-button' onClick={() => this.props.addItem(this.props.item)} inverted>ADD TO CART</CustomButton>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);