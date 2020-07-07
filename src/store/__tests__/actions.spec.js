import actions from "@/store/actions";

const MOCK_FONTS = [
  {
    family: "ABeeZee",
    variants: ["regular", "italic"],
    subsets: ["latin"],
    version: "v13",
    lastModified: "2019-07-17",
    files: {
      regular:
        "http://fonts.gstatic.com/s/abeezee/v13/esDR31xSG-6AGleN6tKukbcHCpE.ttf",
      italic:
        "http://fonts.gstatic.com/s/abeezee/v13/esDT31xSG-6AGleN2tCklZUCGpG-GQ.ttf"
    },
    category: "sans-serif",
    kind: "webfonts#webfont"
  },
  {
    family: "Abel",
    variants: ["regular"],
    subsets: ["latin"],
    version: "v10",
    lastModified: "2019-07-17",
    files: {
      regular: "http://fonts.gstatic.com/s/abel/v10/MwQ5bhbm2POE6VhLPJp6qGI.ttf"
    },
    category: "sans-serif",
    kind: "webfonts#webfont"
  }
];

jest.mock("axios", () => ({
  get: () => {
    return new Promise(resolve => {
      resolve({
        data: {
          items: MOCK_FONTS
        }
      });
    });
  }
}));

describe("listFonts", () => {
  test("gets the fonts and saves them to the state", async () => {
    const commit = jest.fn();
    await actions.listFonts({ commit });
    expect(commit).toHaveBeenCalledWith("appendFonts", MOCK_FONTS);
  });
});

describe("readFont", () => {
  beforeEach(() => {});
  test("gets the font and saves it to the state", async () => {
    const commit = jest.fn();
    await actions.readFont({ commit }, "ABeeZee");
    expect(commit).toHaveBeenCalledWith("setFont", MOCK_FONTS[0]);
  });
});
