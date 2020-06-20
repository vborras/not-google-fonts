import axios from "axios";

export default {
  list(params) {
    return axios.get(`https://www.googleapis.com/webfonts/v1/webfonts`, {
      params: { ...params, key: process.env.VUE_APP_FONTS_API_KEY }
    });
  }
};
