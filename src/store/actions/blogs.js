import {
  FETCH_ALL_BLOGS,
  FETCH_ALL_BLOG_CATEGORIES,
  FETCH_BLOG,
} from "../types";

export const fetchAllBlogsRequest = (payload) => ({
  type: FETCH_ALL_BLOGS.REQUEST,
  payload,
});

export const fetchAllBlogsSuccess = (payload) => ({
  type: FETCH_ALL_BLOGS.SUCCESS,
  payload,
});

export const fetchAllBlogsFailure = (payload) => ({
  type: FETCH_ALL_BLOGS.FAILURE,
  payload,
});

export const fetchBlogRequest = (payload) => ({
  type: FETCH_BLOG.REQUEST,
  payload,
});

export const fetchBlogSuccess = (payload) => ({
  type: FETCH_BLOG.SUCCESS,
  payload,
});

export const fetchBlogFailure = (payload) => ({
  type: FETCH_BLOG.FAILURE,
  payload,
});

export const fetchAllBlogCategoriesRequest = (payload) => ({
  type: FETCH_ALL_BLOG_CATEGORIES.REQUEST,
  payload,
});

export const fetchAllBlogCategoriesSuccess = (payload) => ({
  type: FETCH_ALL_BLOG_CATEGORIES.SUCCESS,
  payload,
});

export const fetchAllBlogCategoriesFailure = (payload) => ({
  type: FETCH_ALL_BLOG_CATEGORIES.FAILURE,
  payload,
});
