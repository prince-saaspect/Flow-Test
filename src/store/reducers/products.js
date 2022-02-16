import { FETCH_ALL_PRODUCT, FETCH_PRODUCT, LOGOUT } from "../types";

const productsInitialState = {
  allProducts: [],
  selectedProduct: {},
  loading: false,
  error: {},
};

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_PRODUCT.SUCCESS:
      return {
        ...state,
        loading: false,
        allProducts: action.payload.result,
      };
    case FETCH_ALL_PRODUCT.FAILURE:
      return {
        ...state,
        loading: false,
        allProducts: [],
        error: action.payload.message,
      };
    case FETCH_PRODUCT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT.SUCCESS:
      return {
        ...state,
        loading: false,
        selectedProduct: action.payload.result,
      };
    case FETCH_PRODUCT.FAILURE:
      return {
        ...state,
        loading: false,
        selectedProduct: {},
        error: action.payload.message,
      };
    case LOGOUT.REQUEST:
      return productsInitialState;
    default:
      return state;
  }
};

export default productsReducer;
