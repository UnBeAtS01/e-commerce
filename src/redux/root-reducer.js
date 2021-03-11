import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import Project from './project/project.reducer';
import directoryReducer from './directory/directory.reducer';
import ShopReducer from './shop/shop.redux';
export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    project: Project,
    directory: directoryReducer,
    shop: ShopReducer
})