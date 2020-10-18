import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const blog = {
  namespaced: true,
  state: {
    title: 'WarsawJS Blog - Self Development Books',
    post: null,
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    getPosts({ commit }) {
        fetch('https://sheets.googleapis.com/v4/spreadsheets/1qHcnrzbNZ1XHs85IfPeZWoLpZuwWp5nWGadjFFRpE3s/values/vue?key=AIzaSyAtgGjAz3Vk3wFJmoRPYuuRCEwRZpeFy0g')
        .then(res => res.json())
        .then(res => {
          const { values } = res;
          const posts = [];
          values.map((v, i) => {
            posts.push({
              date: v[0],
              author: v[1],
              title: v[2],
              text: v[3].substring(0, 150) + '...',
              link: `/post/${ i + 1 }`
            })
          })
          commit('setPosts', posts)
        })
        .catch(err => console.error(err))
    },
  },
}
export default new Vuex.Store({
  modules: {
    blog,
  }
})