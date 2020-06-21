import mutations from "@/store/mutations";

// prettier-ignore
const fonts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

describe("getNextPageFonts", () => {
  test("adds initial fonts", () => {
    const state = {
      fonts,
      paginatedFonts: []
    };

    mutations.getNextPageFonts(state);
    expect(state.paginatedFonts).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("appends to existing fonts", () => {
    const state = {
      fonts,
      paginatedFonts: [1]
    };

    mutations.getNextPageFonts(state);
    expect(state.paginatedFonts).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  test("does not grow bigger than the original fonts array", () => {
    // prettier-ignore
    const state = {
      fonts,
      paginatedFonts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };

    mutations.getNextPageFonts(state);
    expect(state.paginatedFonts).toEqual(fonts);
  });

  test("does nothing when paginated fonts is equal to fonts", () => {
    // prettier-ignore
    const state = {
      fonts,
      paginatedFonts: [...fonts]
    };

    mutations.getNextPageFonts(state);
    expect(state.paginatedFonts).toEqual(fonts);
  });
});
