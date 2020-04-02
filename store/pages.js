import apiConfig from './api';

const state = () => ({
  pageData: {
    hero_home: null,
  }
})

const actions = {
  async GET_SINGLE_PAGE_DATA({ commit }, { pageType, uid }) {
    try {
      const api = await apiConfig()
      let doc = {}
      const result = uid ? await api.getByUID(`${pageType}`, `${uid}`) : await api.getSingle(`${pageType}`)
      doc = result.data

      if (doc) {
        commit('SET_SINGLE_PAGE_DATA', { data: doc, pageType });
      }

      console.log({ GET_SINGLE_PAGE_DATA: doc, pageType })
      return doc
    } catch (err) {
      console.error({ err, pageType })
    }
  }
}

const mutations = {
  SET_SINGLE_PAGE_DATA(state, { data, pageType }) {
    state.pageData[`${pageType}`] = data
  }
}

const getters = {
  homePageData: state => state.pageData.hero_home ? state.pageData.hero_home : null,
}

export default {
  namespaced: true,
  state, actions, mutations, getters
}
