import apiConfig from './api';
import Prismic from 'prismic-javascript';

const state = () => ({
  posts: null
})

const actions = {
  async GET_ALL_POSTS({ commit }) {
    try {
      const api = await apiConfig()

      const { results } = await api.query(
        Prismic.Predicates.at('document.type', 'blog_post'),
        { orderings : '[my.blog-post.date desc]' }
      )

      if (results) {
        commit('SET_ALL_POSTS', { data: results });
      }

      console.log({ GET_ALL_POSTS: results })
      return results
    } catch (err) {
      console.error(err)
    }
  }
}

const mutations = {
  SET_ALL_POSTS(state, { data }) {
    state.posts = data
  }
}

const getters = {
  posts: state => {
    if (!state.posts) {
      return null;
    }

    return state.posts;
  }
}

export default {
  namespaced: true,
  mutations, state, actions, getters
}
