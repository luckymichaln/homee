const state = () => ({
  mobileMenuOpened: true,
})

const mutations = {
  SET_MOBILE_MENU_OPEN(state, { mobileMenuOpened }) {
    state.mobileMenuOpened = mobileMenuOpened
  }
}

export default {
  namespaced: true,
  mutations, state
}
