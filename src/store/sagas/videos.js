import { call, takeLatest, put } from "redux-saga/effects";
import {
  fetchAllVideoCategoriesService,
  fetchAllVideosService,
  fetchVideoService,
} from "../../services/videos";
import {
  fetchAllVideoCategoriesFailure,
  fetchAllVideoCategoriesSuccess,
  fetchAllVideosFailure,
  fetchAllVideosSuccess,
  fetchVideoFailure,
  fetchVideoSuccess,
} from "../actions";
import {
  FETCH_ALL_VIDEOS,
  FETCH_ALL_VIDEO_CATEGORIES,
  FETCH_VIDEO,
} from "../types";

export function* fetchAllVideosSaga(action) {
  try {
    let res = yield call(fetchAllVideosService);
    if (res.success) {
      yield put(fetchAllVideosSuccess(res.data));
    } else {
      yield put(fetchAllVideosFailure(res));
    }
  } catch (e) {
    yield put(
      fetchAllVideosFailure({
        success: false,
        message: e.message,
      })
    );
  }
}

export function* fetchVideoSaga(action) {
  try {
    let res = yield call(fetchVideoService, action.payload);
    if (res.success) {
      yield put(fetchVideoSuccess(res.data));
    } else {
      yield put(fetchVideoFailure(res));
    }
  } catch (e) {
    yield put(
      fetchVideoFailure({
        success: false,
        message: e.message,
      })
    );
  }
}

export function* fetchAllVideoCategoriesSaga() {
  try {
    let res = yield call(fetchAllVideoCategoriesService);
    if (res.success) {
      yield put(fetchAllVideoCategoriesSuccess(res.data));
    } else {
      yield put(fetchAllVideoCategoriesFailure(res));
    }
  } catch (e) {
    yield put(
      fetchAllVideoCategoriesFailure({
        success: false,
        message: e.message,
      })
    );
  }
}

const videosSaga = () => [
  takeLatest(FETCH_ALL_VIDEOS.REQUEST, fetchAllVideosSaga),
  takeLatest(FETCH_VIDEO.REQUEST, fetchVideoSaga),
  takeLatest(FETCH_ALL_VIDEO_CATEGORIES.REQUEST, fetchAllVideoCategoriesSaga),
];

export default videosSaga();
