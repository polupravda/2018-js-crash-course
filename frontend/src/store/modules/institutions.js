import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const ADD_LIKES = 'ADD_LIKES';
const REQUEST_INSTITUTION_SUCCESS = 'REQUEST_INSTITUTION_SUCCESS';
const ADD_INSTITUTION_SUCCESS = 'ADD_INSTITUTION_SUCCESS';

const state = {
  data: [],
  likes: 0,
  institution: {}
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  },
  [ADD_LIKES](state) {
    state.likes++;
  },
  [REQUEST_INSTITUTION_SUCCESS](state, data) {
    state.institution = data;
  },
  [ADD_INSTITUTION_SUCCESS](state, data) {
    state.institution = data;
  }
};

const actions = {
  async fetchInstitutions({ commit }) {
    const res = await axios.get('http://localhost:5000/institution/all');
    commit(REQUEST_SUCCESS, res.data);
  },
  async fetchInstitution({ commit }, id) {
    const res = await axios.get(`http://localhost:5000/institution/${id}/json`);

    commit(REQUEST_INSTITUTION_SUCCESS, res.data)
  },
  async addInstitution({ commit }, id) {
    const res = await axios.post(`http://localhost:5000/institution/${id}/json`);
    commit(ADD_INSTITUTION_SUCCESS, res.data)
  },
  addLikes({ commit }) {
    commit(ADD_LIKES);
  }
};

export default {
  state,
  mutations,
  actions,
};