import axios from "axios";
import { createStore } from "vuex";
import router from '../routes.js'

export default createStore({
  state: {
    status:true,

  },
  mutations: {
    changestatus(state){
      state.status =! state.status
    },
   
  


  },
  actions: {
   async login({commit}, data){
    const response = await axios.post('api/login', {
        email: data.email,
        password : data.password
       })
       localStorage.setItem( 'token' , response.data.success.token)
       router.push('/')
      
    }
    
  
  },
  modules: {},
});


