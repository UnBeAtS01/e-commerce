import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.components';
import { connect } from 'react-redux';
import './category.styles.scss';
import { DataForRend } from '../../redux/shop/shop.action'

const CategoryPage = ({ match, SHOP_DATA }) => {
    console.log(match.params.categoryId);
    //const val = () => { DataForRend(match.params.categoryId) };
    console.log(SHOP_DATA);
    console.log(SHOP_DATA.find(ele => ele.routeName === match.params.categoryId));
    var { items, title } = SHOP_DATA.find(ele => ele.routeName === match.params.categoryId);

    return (
        <div className='category-page'>
            <div className='title'>{title}</div>
            <div className='items'>
                {
                    items.map(item => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>

        </div>
    )
}
// const mapDispatchToProps = dispatch => ({
//     DataForRend: item => dispatch(DataForRend(item))
// })
const mapStateToProps = state => {
    return {
        SHOP_DATA: state.shop.SHOP_DATA
    }
}
export default connect(mapStateToProps)(CategoryPage);