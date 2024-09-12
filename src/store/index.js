import { createStore } from "vuex";

export default createStore({
  state: {
    isNavToggled: false,
  },
  getters: {
    stateNav: (state) => state.isNavToggled,
  },
  mutations: {
    updateNav(state, isNavToggled) {
      state.isNavToggled = isNavToggled;
    },
  },
  actions: {
    toggleNav(context, payload) {
      console.log("toggleNav ", payload.value);
      const toggle = !payload.value;
      context.commit("updateNav", toggle);
    },
  },
  modules: {},
});
