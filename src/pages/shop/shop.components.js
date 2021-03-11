import React from 'react';
import CollectionAll from '../../components/collectionALL/collectionall.components';
import { Route, Switch } from 'react-router-dom';
import CategoryPage from '../category/category.components';

class ShopPage extends React.Component {

    render() {
        const { match } = this.props;
        console.log(match)
        return (
            <div className='shop-page'>

                <Route exact path={`${match.path}`} component={CollectionAll} />
                <Route path={`${match.path}/:categoryId`} component={CategoryPage} />

            </div>
        )
    }
}

export default ShopPage;
