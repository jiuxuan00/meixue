import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    footer: true
  },
  getters: {
    footer: state => state.footer
  },
  mutations: {
    //显示底部
    footer(state, data) {
      state.footer = data;
    }
  },
  actions: {
    handleFooter({ commit }, data) {
      commit("footer", data);
    }
  }
});


export default store;
