import {
  FETCH_ALL_VIDEOS,
  FETCH_ALL_VIDEO_CATEGORIES,
  FETCH_VIDEO,
} from "../types";

export const fetchAllVideosRequest = (payload) => ({
  type: FETCH_ALL_VIDEOS.REQUEST,
  payload,
});

export const fetchAllVideosSuccess = (payload) => ({
  type: FETCH_ALL_VIDEOS.SUCCESS,
  payload,
});

export const fetchAllVideosFailure = (payload) => ({
  type: FETCH_ALL_VIDEOS.FAILURE,
  payload,
});

export const fetchVideoRequest = (payload) => ({
  type: FETCH_VIDEO.REQUEST,
  payload,
});

export const fetchVideoSuccess = (payload) => ({
  type: FETCH_VIDEO.SUCCESS,
  payload,
});

export const fetchVideoFailure = (payload) => ({
  type: FETCH_VIDEO.FAILURE,
  payload,
});

export const fetchAllVideoCategoriesRequest = (payload) => ({
  type: FETCH_ALL_VIDEO_CATEGORIES.REQUEST,
  payload,
});

export const fetchAllVideoCategoriesSuccess = (payload) => ({
  type: FETCH_ALL_VIDEO_CATEGORIES.SUCCESS,
  payload,
});

export const fetchAllVideoCategoriesFailure = (payload) => ({
  type: FETCH_ALL_VIDEO_CATEGORIES.FAILURE,
  payload,
});
