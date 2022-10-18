import Vue from 'vue'
import Vuex from 'vuex'
// ES6 Modules or TypeScript
import swal from 'sweetalert';


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
      fetch('http://localhost:1517/register', {
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
    // login: async (context, payload) => {
    //   console.log("Hi")
    //   try {
    //     await fetch("https://sabindi.herokuapp.com/login", {
    //       method: "POST",
    //       body: JSON.stringify(payload),
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       }
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {

    //         let { user } = data;
    //         console.log(user);
    //         context.commit("setUser", user);
    //         // .then(() => console.log(context.state.user))
    //         // alert('Login in success')
    //         // router.push("/products");
    //       })
    //       .catch((err) => {
    //         context.commit('setErrMsg', err);
    //       });


    //   } catch (e) {
    //     context.commit('setErrMsg', e.message)
    //   }


    // },
  },
  modules: {
  }
})
