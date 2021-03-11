export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existornot = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existornot) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    }
};

export const deleteItemFromCart = (cartItems, id) => {
    const newItemList = cartItems.filter(cartele => (cartele.id !== id))
    return newItemList;
};

export const subtractitem = (cartItems, cartitemtodelete) => {
    const newitems = cartItems.find(ele => (
        ele.id === cartitemtodelete.id
    ));


    if (newitems.quantity === 1) {
        const newq = cartItems.filter(ele => (ele.id !== newitems.id));
        return newq;
    }
    else {
        const newwst = cartItems.map(ele => {
            if (ele.id === cartitemtodelete.id) {
                return { ...ele, quantity: ele.quantity - 1 }

            }
            else
                return ele;
        })
        return newwst;
    }
}