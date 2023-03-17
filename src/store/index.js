

const state = {
  count: 0,
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  setValue(state, value) {
    state.count = value;
  },
  reset(state) {
    state.count = 0;
  },
};

const actions = {
  increment({ commit }) {
    commit('increment');
  },
  decrement({ commit }) {
    commit('decrement');
  },
  setValue({ commit }, value) {
    commit('setValue', value);
  },
  reset({ commit }) {
    commit('reset');
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
