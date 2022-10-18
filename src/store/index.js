import Vue from 'vue'
import Vuex from 'vuex'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    users: null,
    user: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user 
    }
  },
  actions: {
    async getUsers(context) {
      let fetched = await fetch("https://sabindi.herokuapp.com/users");
      let res = await fetched.json();
      context.commit("setUsers", res.users);
    },
    register: async (context, payload) => {
      console.log("Hi")
      try {
        await fetch("https://sabindi.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'set-cookie': 'token'
          }
        })
          .then((res) => res.json())
          .then((data) => {

            let { user } = data;
            console.log(user);
            context.commit("setUser", user);
            // .then(() => console.log(context.state.user))
            // alert('Login in success')
            // router.push("/products");
          })
          .catch((err) => {
            context.commit('setErrMsg', err);
          });


      } catch (e) {
        context.commit('setErrMsg', e.message)
      }


    },
    login: async (context, payload) => {
      console.log("Hi")
      try {
        await fetch("https://sabindi.herokuapp.com/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
          .then((res) => res.json())
          .then((data) => {

            let { user } = data;
            console.log(user);
            context.commit("setUser", user);
            // .then(() => console.log(context.state.user))
            // alert('Login in success')
            // router.push("/products");
          })
          .catch((err) => {
            context.commit('setErrMsg', err);
          });


      } catch (e) {
        context.commit('setErrMsg', e.message)
      }


    },
  },
  modules: {
  }
})
