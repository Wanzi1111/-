'use strict';

const sendRes=require("../until/sendRes");


const Controller = require('egg').Controller;

class ListdataController extends Controller {
  async index() {
    const { ctx } = this;

    const data=await ctx.service.list.reqlistdata();


    let listdata=[];//创建一个新的数组
    data.forEach(item=>{
    if(listdata.some(jtem=>item.class===jtem.class)) return //都为真才返回true
    listdata.push(item)
    })
    // const newdata=data.map(item=>item.class);//查找需要的内容
 
    // const   listdata=[...new Set(newdata)];//去重
    ctx.body=sendRes(0,"请求首页列表成功",{listdata})
  }

  async everylist() {
    
    const { ctx } = this;
    const {datas}=ctx.request.body
    // console.log(ctx.request.body)
    const everydata=await ctx.service.list.reqeverylist(datas);
    // console.log(everydata)
    ctx.body=sendRes(0,"请求首页列表成功",{everydata})
  }
}

module.exports = ListdataController;
