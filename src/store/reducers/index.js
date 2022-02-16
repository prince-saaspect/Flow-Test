import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth";
import blogsReducer from "./blogs";
import productsReducer from "./products";
import videosReducer from "./videos";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = () =>
  combineReducers({
    auth: authReducer,
    blogs: blogsReducer,
    videos: videosReducer,
    products: productsReducer,
  });

export default persistReducer(persistConfig, rootReducer());
