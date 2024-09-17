import { createStore } from "vuex";

export default createStore({
  state: {
    isNavToggled: false,
    navTitle: "",
    subNav: 0,
  },
  getters: {
    stateNav: (state) => state.isNavToggled,
    navTitle: (state) => state.navTitle,
    subNav: (state) => state.subNav,
  },
  mutations: {
    updateNav(state, isNavToggled) {
      state.isNavToggled = isNavToggled;
    },
    updateSubNav(state, subNav) {
      state.subNav = subNav;
    },
  },
  actions: {
    toggleNav(context, payload) {
      console.log("toggleNav ", payload.value);
      const toggle = !payload.value;
      context.commit("updateNav", toggle);
    },
    toggleSubNav(context, payload) {
      console.log("toggleSubNav ", payload, this.state.subNav);
      context.commit("updateSubNav", payload);
    },
  },
  modules: {},
});
