import router from '@/router'

import { USER_LOGIN } from '../mutations'

const state = {
  isAuth: !!localStorage.getItem('sdc_token')
}

const getters = {
  isAuth: state => state.isAuth
}

const actions = {
  saveLocalStorage: ({ commit }, formObj) => {
    commit(USER_LOGIN, formObj)
  },
  logout: () => {
    localStorage.removeItem('sdc_token')
    router.push({name: 'login'})
  }
}

const mutations = {
  [USER_LOGIN](state , formObj) {
    localStorage.setItem('sdc_token', JSON.stringify(formObj))
    router.push({name: 'home'})
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
