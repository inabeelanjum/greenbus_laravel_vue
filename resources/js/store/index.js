import axios from "axios";
import { createStore } from "vuex";
import router from '../routes.js'

export default createStore({
  state: {
    status:true,
    user:null

  },
  mutations: {
    changestatus(state){
      state.status =! state.status
    },
    user( state,data){
      state.user = data.data.name
      console.log(state.user)
    }
   
  


  },
  actions: {
   async login({commit}, data){
     
    const response = await axios.post('api/login', data)
       localStorage.setItem( 'token' , response.data.success.token)
       router.push('/')
       
      
    },

    async getuser({commit},){
      const response = await axios.get('api/user').then(
        (response) => {
        commit('user', response.data)
        
        },
        //error callback
        (err) => console.log(err));
          }
  
  },
  modules: {},
  getters:{
   
    
  }
});


