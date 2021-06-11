import { createStore } from "vuex";

export default createStore({
  state: {
    status:true
  },
  mutations: {
    changestatus(state){
      state.status =! state.status
    }

  },
  actions: {
  
  },
  modules: {},
});


