export default {
  clearFonts(state) {
    state.fonts = [];
  },
  appendFonts(state, fonts = []) {
    state.fonts = [...state.fonts, ...fonts];
  }
};
