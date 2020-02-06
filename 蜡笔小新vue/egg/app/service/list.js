const Service = require('egg').Service;

class ListService extends Service {
  async reqlistdata() {//请求首页列表
    return await this.app.mysql.select("newlist");
  }

  async reqeverylist(title) {//请求每一季的数据列表
    return await this.app.mysql.select("newlist",{where:{class:title}});
  }
}
module.exports = ListService;