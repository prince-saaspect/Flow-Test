import { call, takeLatest, put } from "redux-saga/effects";
import {
  fetchAllProductsService,
  fetchProductService,
} from "../../services/products";
import {
  fetchAllProductFailure,
  fetchAllProductSuccess,
  fetchProductFailure,
  fetchProductSuccess,
} from "../actions";
import { FETCH_ALL_PRODUCT, FETCH_PRODUCT } from "../types";

export function* fetchAllProductsSaga(action) {
  try {
    let res = yield call(fetchAllProductsService);
    if (res.success) {
      yield put(fetchAllProductSuccess(res.data));
    } else {
      yield put(fetchAllProductFailure(res));
    }
  } catch (e) {
    yield put(
      fetchAllProductFailure({
        success: false,
        message: e.message,
      })
    );
  }
}

export function* fetchProductSaga(action) {
  try {
    let res = yield call(fetchProductService, action.payload);
    if (res.success) {
      yield put(fetchProductSuccess(res.data));
    } else {
      yield put(fetchProductFailure(res));
    }
  } catch (e) {
    yield put(
      fetchProductFailure({
        success: false,
        message: e.message,
      })
    );
  }
}

const productsSaga = () => [
  takeLatest(FETCH_ALL_PRODUCT.REQUEST, fetchAllProductsSaga),
  takeLatest(FETCH_PRODUCT.REQUEST, fetchProductSaga),
];

export default productsSaga();
