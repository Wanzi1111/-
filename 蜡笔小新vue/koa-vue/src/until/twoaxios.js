import axios from "axios";
export default function(method,url,data=[]){
    let val=method==="get"?"parmas":"data"
    let obj={}
      obj={
        method,
        url,
        headers:{
          autotoken:localStorage.getItem("token")
        }
      }
    
    obj[val]=data
  
    return axios(obj).catch(error=>{
      if(error.response.status===404) return alert("前端未定义")
      if(error.response.status===500) return alert("后台服务器错误")
    })
}