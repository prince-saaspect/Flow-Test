import axios from "axios";
import { apiURL } from "../constants";

export const fetchAllBlogsService = async () => {
  try {
    console.log("Inside fetch all blog service data = ");
    let URL = apiURL + "api/blog";
    console.log("API URL endpoint = ", URL);
    let res = await axios.get(URL);
    if (res.status === 200) {
      return {
        success: true,
        data: res.data,
        message: "",
      };
    } else {
      return {
        success: false,
        data: {},
        message: res.data,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e.message,
    };
  }
};

export const fetchBlogService = async (id) => {
  try {
    console.log("Inside fetch all blog service data id = ", id);
    let URL = apiURL + "api/blog/" + id;
    console.log("API URL endpoint = ", URL);
    let res = await axios.get(URL);
    if (res.status === 200) {
      return {
        success: true,
        data: res.data,
        message: "",
      };
    } else {
      return {
        success: false,
        data: {},
        message: res.data,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e.message,
    };
  }
};

export const fetchAllBlogsCategoriesService = async () => {
  try {
    console.log("Inside fetch all blog category service id = ");
    let URL = apiURL + "api/blogCategory";
    console.log("API URL endpoint = ", URL);
    let res = await axios.get(URL);
    if (res.status === 200) {
      return {
        success: true,
        data: res.data,
        message: "",
      };
    } else {
      return {
        success: false,
        data: {},
        message: res.data,
      };
    }
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e.message,
    };
  }
};
