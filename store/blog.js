import apiConfig from './api';
import Prismic from 'prismic-javascript';

const state = () => ({
  posts: [],
  singlePost: null
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
  },

  async GET_SINGLE_POST({ commit, state }, { uid }) {
    try {
      const api = await apiConfig()
      let doc = null;
      const result = await api.getByUID('blog_post', uid);
      doc = result;

      if (result) {
        commit('SET_SINGLE_POST', { data: doc });
      }

      console.log({ GET_SINGLE_POST: doc })
      return result;
    } catch (err) {
      console.error(err)
    }
  }
}

const mutations = {
  SET_ALL_POSTS(state, { data }) {
    state.posts = data
  },

  SET_SINGLE_POST(state, { data }) {
    state.singlePost = data
  },
}

const getters = {
  posts: state => state.posts || null,
  singlePost: state => state.singlePost || null
}

export default {
  namespaced: true,
  mutations, state, actions, getters
}
