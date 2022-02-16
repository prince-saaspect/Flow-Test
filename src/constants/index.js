let URL = "";
if (process.env.NODE_ENV === "development") {
  URL = "http://localhost:5000/";
} else {
  URL = "API_PRODUCTION_URL";
}

export const apiURL = URL;
