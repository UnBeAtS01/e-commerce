import React from 'react';

import './product.styles.scss';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { connect } from 'react-redux';
import { deleteItem, addItem, subtract } from '../../redux/cart/cart.action';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
const Product = ({ cartele: { name, price, quantity, imageUrl, id }, deleteItem, addItem, cartele, subtract }) => {
    return (
        <div className='container-product'>
            <div className='ogg'>
                <img className='image' src={imageUrl} alt='product' />
                <span className='name'>{name}</span>
            </div>

            <div className='quantity'><AddRoundedIcon className='addsubt' onClick={() => addItem(cartele)} />{quantity}<RemoveRoundedIcon className='addsubt' onClick={() => subtract(cartele)} /></div>
            <div className='price'>{price}</div>
            <div className='remove' onClick={() => deleteItem(id)}><HighlightOffTwoToneIcon style={{ fontSize: "36px" }} /></div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteItem: (item) => dispatch(deleteItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    subtract: (item) => dispatch(subtract(item)),
})
export default connect(null, mapDispatchToProps)(Product);