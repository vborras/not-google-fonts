import axios from "axios";

const BASE_URL = "https://www.googleapis.com/webfonts/v1/webfonts";

export default {
  list(params) {
    return axios.get(BASE_URL, {
      params: { ...params, key: process.env.VUE_APP_FONTS_API_KEY }
    });
  },
  async read(fontFamily) {
    /**
     * Unfortunately, Google Fonts doesn't provide a font details endpoind, so we need to
     * mock that behavior
     **/
    const response = await axios.get(BASE_URL, {
      params: { key: process.env.VUE_APP_FONTS_API_KEY }
    });
    const font = response.data.items.find(font => font.family === fontFamily);
    return {
      data: font
    };
  }
};
