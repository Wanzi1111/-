<template>
  <div class="home">


 <van-field v-model="user" placeholder="请输入账号" />
  <van-field v-model="pwd" placeholder="请输入密码" />

 <van-button type="primary" v-show="!btnShow" @click="()=>login('/getlogin')">登录</van-button>
 <p v-show="!btnShow" @click="btnShow=!btnShow">没有账号，去注册</p>

 <van-button type="danger" v-show="btnShow" @click="()=>login('/getreginser')">注册</van-button>
 <p v-show="btnShow" @click="btnShow=!btnShow">已有账号，去登录</p>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data(){
    return {
      user:"",
      pwd:"",
      btnShow:false

    }
  },
  components: {
    // HelloWorld
  },
  methods: {
   async login(url){
     const {user,pwd,btnShow}=this
     if(user===""){
       alert("账号不能为空");
       return
     }
     if(pwd===""){
       alert("密码不能为空");
       return
     }
     const logindata=await this.axios("post",url,{user,pwd});
     const {code,msg}=logindata.data
     
     if(code===0){//登录成功
       alert(msg);
       window.localStorage.setItem("token",logindata.data.newdata.tokens)
       this.$router.push({path:"/list"})
       return
     }
     if(code===2){//注册成功
       alert(msg);
       this.btnShow=!btnShow
       return
     }
     alert(msg)
    }
  },
}
</script>
