import { call, takeLatest, put } from "redux-saga/effects";
import {
  fetchAllBlogsCategoriesService,
  fetchAllBlogsService,
  fetchBlogService,
} from "../../services/blogs";
import {
  fetchAllBlogCategoriesFailure,
  fetchAllBlogCategoriesSuccess,
  fetchAllBlogsFailure,
  fetchAllBlogsSuccess,
  fetchBlogFailure,
  fetchBlogSuccess,
} from "../actions";
import {
  FETCH_ALL_BLOGS,
  FETCH_ALL_BLOG_CATEGORIES,
  FETCH_BLOG,
} from "../types";

export function* fetchAllBlogsSaga(action) {
  try {
    let res = yield call(fetchAllBlogsService);
    if (res.success) {
      yield put(fetchAllBlogsSuccess(res.data));
    } else {
      yield put(fetchAllBlogsFailure(res));
    }
  } catch (e) {
    yield put(
      fetchAllBlogsFailure({
        success: false,
        message: e.message,
      })
    );
  }
}

export function* fetchBlogSaga(action) {
  try {
    let res = yield call(fetchBlogService, action.payload);
    if (res.success) {
      yield put(fetchBlogSuccess(res.data));
    } else {
      yield put(fetchBlogFailure(res));
    }
  } catch (e) {
    yield put(
      fetchBlogFailure({
        success: false,
        message: e.message,
      })
    );
  }
}

export function* fetchAllBlogsCategoriesSaga() {
  try {
    let res = yield call(fetchAllBlogsCategoriesService);
    if (res.success) {
      yield put(fetchAllBlogCategoriesSuccess(res.data));
    } else {
      yield put(fetchAllBlogCategoriesFailure(res));
    }
  } catch (e) {
    yield put(
      fetchAllBlogCategoriesFailure({
        success: false,
        message: e.message,
      })
    );
  }
}

const blogSaga = () => [
  takeLatest(FETCH_ALL_BLOGS.REQUEST, fetchAllBlogsSaga),
  takeLatest(FETCH_BLOG.REQUEST, fetchBlogSaga),
  takeLatest(FETCH_ALL_BLOG_CATEGORIES.REQUEST, fetchAllBlogsCategoriesSaga),
];

export default blogSaga();
