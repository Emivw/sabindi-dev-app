import Vue from 'vue'
import Vuex from 'vuex'
// ES6 Modules or TypeScript
import swal from 'sweetalert';
import router from '@/router';


Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    user: null
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user 
    }
  },
  actions: {
    // async getUser(context,id) {
    //   let fetched = await fetch("https://proptechapi.herokuapp.com/users"+id);
    //   let res = await fetched.json();
    //   context.commit("setUsers", res.users);
    // },
    async register(context, payload)  {
      fetch('https://proptechapi.herokuapp.com/register', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == "The email already exist") {
            swal({
              icon: "error",
              title: "The email already exist",
              text: "Please try another email",
              button: "OK"
            })
          } else {
            swal({
              icon: "success",
              title: "Registered",
              buttons: "OK"
            })
            context.commit('setUser', payload)
            console.log(data);
          }
        })
    },
    async login(context, payload) {
      fetch('https://proptechapi.herokuapp.com/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == 'Email does not exist') {
            swal({
              icon: "error",
              title: "Email does not exist",
              text: "Type in the proper email",
              buttons: "Try Again"
            })
          } else {
            if (data.msg == 'Incorrect Password') {
              swal({
                icon: "error",
                title: "Incorrect Password",
                buttons: "Try Again"
              })
            } else {
              swal({
                icon: "success",
                title: `Welcome Builders, ${data.msg[0].userName}`,
                buttons: "OK",
                closeOnClickOutside: false
              })

              context.commit('setUser', data.msg[0]);
              router.push('/about')
            }
          }
        })

    },
  },
  modules: {
  }
})
