import axios from "axios";
import { apiURL } from "../constants";

export const signUpWithEmailService = async (data) => {
  try {
    let URL = apiURL + "api/user/signup";
    console.log("API URL endpoint = ", URL);
    let res = await axios.post(URL, data);

    if (res.status === 201) {
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
    console.log("Error message", e);
    return {
      success: false,
      data: {},
      message: e.message,
    };
  }
};

export const loginWithEmailService = async (data) => {
  try {
    // let URL = apiURL + "api/user/login";
    // console.log("API URL endpoint = ", URL);
    // let res = await axios.post(URL, data);
    // if (res.status === 200) {
    //   return {
    //     success: true,
    //     data: res.data,
    //     message: "",
    //   };
    // } else {
    //   return {
    //     success: false,
    //     data: {},
    //     message: res.data,
    //   };
    // }
    return {
      success: true,
      data: {
        name: data.name,
        email: data.email,
      },
      message: "",
    };
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e.message,
    };
  }
};
