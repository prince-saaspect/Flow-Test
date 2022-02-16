import { FETCH_ALL_PRODUCT, FETCH_PRODUCT } from "../types";

export const fetchAllProductRequest = (payload) => ({
  type: FETCH_ALL_PRODUCT.REQUEST,
  payload,
});

export const fetchAllProductSuccess = (payload) => ({
  type: FETCH_ALL_PRODUCT.SUCCESS,
  payload,
});

export const fetchAllProductFailure = (payload) => ({
  type: FETCH_ALL_PRODUCT.FAILURE,
  payload,
});

export const fetchProductRequest = (payload) => ({
  type: FETCH_PRODUCT.REQUEST,
  payload,
});

export const fetchProductSuccess = (payload) => ({
  type: FETCH_PRODUCT.SUCCESS,
  payload,
});

export const fetchProductFailure = (payload) => ({
  type: FETCH_PRODUCT.FAILURE,
  payload,
});
