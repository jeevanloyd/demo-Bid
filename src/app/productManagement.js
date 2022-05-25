const ADD_PRODUCT = "add_product";
const PLACE_BID = "place_bid";
const DELETE_BID = "delete_bid";
const DELETE_USER_BID = "delete_user_bid";

let productId = 0;

export const addProduct = () => ({
    type: ADD_PRODUCT,
});

export const placeBid = () => ({
    type: PLACE_BID,
});

export const deleteBid = () => ({
    type: DELETE_BID,
});

export const deleteUserBid = () => ({
    type: DELETE_USER_BID,
});

let initialState = {
    isUserLogin: false,
    loggedInUser: "",
    products: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            action.productId = productId;
            state.products.push(action.product);
            return state;
        case PLACE_BID:
            state.products[parseInt(action.details.productId)].bids.push(
                action.details
            );

            return state;

        case DELETE_BID:
            state.products.splice(action.productId, 1);
            return state;
        case DELETE_USER_BID:
            state.products[parseInt(action.productId)].bids.splice(action.index, 1);
            return state;
        default:
            return state;
    }
};
