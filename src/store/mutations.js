const PAGE_SIZE = 10;

export default {
  clearFonts(state) {
    state.fonts = [];
  },
  appendFonts(state, fonts = []) {
    state.fonts = [...state.fonts, ...fonts];
  },
  getNextPageFonts(state) {
    const start = state.paginatedFonts.length;
    const end = state.paginatedFonts.length + PAGE_SIZE;
    state.paginatedFonts = state.paginatedFonts.concat(
      state.fonts.slice(start, end)
    );
  },
  setFont(state, font) {
    state.font = font;
  },
  setPreviewText(state, text) {
    state.previewText = text;
  }
};
