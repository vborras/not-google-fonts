import GoogleFontsService from "@/api/GoogleFontsService";

export default {
  async listFonts({ commit }, params = {}) {
    const response = await GoogleFontsService.list(params);
    commit("appendFonts", response.data.items);
  },
  async readFont({ commit }, fontFamily) {
    const response = await GoogleFontsService.read(fontFamily);
    commit("setFont", response.data);
  }
};
