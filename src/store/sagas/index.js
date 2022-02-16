import { all } from "redux-saga/effects";
import auth from "./auth";
import blogs from "./blogs";
import videos from "./videos";
import products from "./products";

const sagas = [...auth, ...blogs, ...videos, ...products];

export function* rootSaga() {
  yield all(sagas);
}
