import {
  FETCH_ALL_VIDEOS,
  FETCH_ALL_VIDEO_CATEGORIES,
  FETCH_VIDEO,
  LOGOUT,
} from "../types";

const videosInitialState = {
  allVideos: [],
  selectedVideo: {},
  videoCategories: [],
  loading: false,
  error: {},
};

const videosReducer = (state = videosInitialState, action) => {
  switch (action.type) {
    case FETCH_ALL_VIDEOS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_VIDEOS.SUCCESS:
      return {
        ...state,
        loading: false,
        allVideos: action.payload.result,
      };
    case FETCH_ALL_VIDEOS.FAILURE:
      return {
        ...state,
        loading: false,
        allVideos: [],
        error: action.payload.message,
      };
    case FETCH_VIDEO.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VIDEO.SUCCESS:
      return {
        ...state,
        loading: false,
        selectedVideo: action.payload.result,
      };
    case FETCH_VIDEO.FAILURE:
      return {
        ...state,
        loading: false,
        selectedVideo: {},
        error: action.payload.message,
      };
    case FETCH_ALL_VIDEO_CATEGORIES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_VIDEO_CATEGORIES.SUCCESS:
      return {
        ...state,
        loading: false,
        videoCategories: action.payload.result,
      };
    case FETCH_ALL_VIDEO_CATEGORIES.FAILURE:
      return {
        ...state,
        loading: false,
        selectedVideo: {},
        error: action.payload.message,
      };
    case LOGOUT.REQUEST:
      return videosInitialState;
    default:
      return state;
  }
};

export default videosReducer;
