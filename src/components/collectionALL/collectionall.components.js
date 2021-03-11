import React from 'react';
import './collectionall.styles.scss';
import PreviewCollection from '../preview/preview.components';
import { connect } from 'react-redux';
const CollectionAll = ({ collections }) => {
    return (
        <div className='collection-all'>{
            collections.map(collection => {
                return <PreviewCollection key={collection.id} items={collection.items} title={collection.title} routeName={collection.router} />
            }
            )
        }</div>
    )
}

const mapStateToProps = (state) => {
    return {
        collections: state.shop.SHOP_DATA
    }
}

export default connect(mapStateToProps)(CollectionAll);

