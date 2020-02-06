import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    img:[],
    everydata:[]
  },
  mutations: {
    getlist(state,data,){
      state.list=data.listdata
      state.img=data.pic,
      state.everydata=data.every
    }
  },
  actions: {
  async getlistdata(store,options){
    const {axios}=Vue.prototype;//原型上的axios请求
    const {method,url,datas}=options
    const res=await axios(method,url,{datas});
    const {code,msg,newdata}=res.data
    const obj={
      listdata:newdata.listdata,
      pic:newdata.pic,
      every:newdata.everydata

    }
    if(code===0){
      store.commit("getlist",obj)
    }
    },


    
    // async geteverydata(store,options){
    //   const {method,url,datas}=options
    //   const {axios}=Vue.prototype
    //   const everyData=await axios(method,url,{datas});
    //     const {code,msg,newdata}=everyData.data
    //     const obj={
    //       every:newdata.everydata
    //     }
    //     if(code===0){
    //       store.commit("getlist",obj)
    //     }
    //   },

  },
  modules: {
  }
})
