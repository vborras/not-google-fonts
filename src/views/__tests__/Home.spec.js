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
  actions: {
    listFonts: jest.fn()
  },
  mutations: {
    getNextPageFonts: jest.fn()
  }
});

describe("Home Page", () => {
  beforeEach(() => {
    store.state.fonts = fonts;
    store.state.paginatedFonts = [];
    store.commit = jest.fn();
  });

  test("shows loader on initial mount", () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });

    expect(wrapper.findComponent(Loader).exists()).toBe(true);
  });

  test("gets initial fonts", async () => {
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });

    wrapper.setData({ isLoading: false });
    await wrapper.vm.$nextTick();
    expect(store.commit).toHaveBeenCalledWith("getNextPageFonts");
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

  test("performs initial load only when there are no fonts already", async () => {
    store.state.paginatedFonts = fonts.slice(0, 10);
    const wrapper = shallowMount(Home, {
      store,
      localVue
    });
    await wrapper.vm.$nextTick();
    expect(store.commit).not.toHaveBeenCalled();
  });
});
