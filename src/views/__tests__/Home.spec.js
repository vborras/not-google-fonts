import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";
import fonts from "@/../tests/unit/fixtures/fonts";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import Loader from "@/components/Loader";
import FontCard from "@/components/FontCard";
const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fonts,
    paginatedFonts: []
  },
  actions: {
    listFonts: jest.fn()
  },
  mutations: {
    getNextPageFonts: jest.fn()
  }
});

store.commit = jest.fn();

describe("Home Page", () => {
  test("shows loader on initial mount", () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });

    expect(wrapper.findComponent(Loader).exists()).toBe(true);
  });

  test("shows fonts", () => {
    store.state.paginatedFonts = fonts.slice(0, 10);
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });

    wrapper.setData({ isLoading: false });

    expect(wrapper.findAllComponents(FontCard).length).toBe(10);
  });

  test("loads more fonts when clicking the pagination button", async () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });

    wrapper.setData({ isLoading: false });
    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();
    expect(store.commit).toHaveBeenCalledWith("getNextPageFonts");
  });
});
