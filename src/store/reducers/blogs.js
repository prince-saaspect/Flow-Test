import {
  FETCH_ALL_BLOGS,
  FETCH_ALL_BLOG_CATEGORIES,
  FETCH_BLOG,
  LOGOUT,
} from "../types";

const blogsInitialState = {
  allBlogs: [],
  selectedBlog: {},
  blogCategories: [],
  loading: false,
  error: {},
};

const blogsReducer = (state = blogsInitialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_BLOGS.SUCCESS:
      return {
        ...state,
        loading: false,
        allBlogs: action.payload.result,
      };
    case FETCH_ALL_BLOGS.FAILURE:
      return {
        ...state,
        loading: false,
        allBlogs: [],
        error: action.payload.message,
      };
    case FETCH_BLOG.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOG.SUCCESS:
      return {
        ...state,
        loading: false,
        selectedBlog: action.payload.result,
      };
    case FETCH_BLOG.FAILURE:
      return {
        ...state,
        loading: false,
        selectedBlog: {},
        error: action.payload.message,
      };
    case FETCH_ALL_BLOG_CATEGORIES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_BLOG_CATEGORIES.SUCCESS:
      return {
        ...state,
        loading: false,
        blogCategories: action.payload.result,
      };
    case FETCH_ALL_BLOG_CATEGORIES.FAILURE:
      return {
        ...state,
        loading: false,
        selectedBlog: {},
        error: action.payload.message,
      };
    case LOGOUT.REQUEST:
      return blogsInitialState;
    default:
      return state;
  }
};

export default blogsReducer;
