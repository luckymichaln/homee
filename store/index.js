import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import header from './header';
import footer from './footer';
import pages from './pages';
import blog from './blog';
import ui from './ui';

Vue.use(Vuex)

const createStore = () => {
  const modules = {
    header,
    footer,
    pages,
    blog,
    ui
  }

  return new Vuex.Store({
    modules,
  })
}

export default createStore;