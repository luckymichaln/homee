import apiConfig from './api';

const state = () => ({
  headerData: null
})

const actions = {
  async GET_HEADER_DATA({ commit }) {
    try {
      const api = await apiConfig()
      let doc = {}
      const result = await api.getSingle('main_header')
      doc = result.data

      if (doc) {
        commit('SET_HEADER_DATA', { data: doc });
      }

      console.log({ GET_HEADER_DATA: doc })
      return doc
    } catch (err) {
      console.error(err)
    }
  }
}

const mutations = {
  SET_HEADER_DATA(state, { data }) {
    state.headerData = data
  }
}

const getters = {
  headerLinks: state => {
    if (!state.headerData) {
      return null;
    }

    const { body } = state.headerData;

    return body.map(el => {
      const { primary } = el;
      const { link_url, link_label } = primary;
      const { url } = link_url;

      return {
        label: link_label,
        url: link_url.slug !== 'blog' ? `#${url.split('#')[1]}` : '/blog'
      }
    });
  }
}

export default {
  namespaced: true,
  mutations, state, actions, getters
}
