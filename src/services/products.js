import axios from "axios";
import { apiURL } from "../constants";

export const fetchAllProductsService = async () => {
  try {
    console.log("Inside fetch all blog service data = ");
    let URL = apiURL + "api/product";
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

export const fetchProductService = async (id) => {
  try {
    console.log("Inside fetch all blog service data id = ", id);
    let URL = apiURL + "api/product/" + id;
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
