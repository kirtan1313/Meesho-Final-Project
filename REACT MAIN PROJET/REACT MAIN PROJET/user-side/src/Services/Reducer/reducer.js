const initialState = {
    allproducts: [],
    product: null,
    isEdit: false
};

function reducer(state = initialState, action) {
    switch (action.type) {

        case 'ADDPRODUCTS':
            return {
                ...state,
                allproducts: action.payload,
            };

        default:
            return state;
    }
}

export default reducer;