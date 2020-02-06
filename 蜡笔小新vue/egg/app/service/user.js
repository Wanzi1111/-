const Service = require('egg').Service;

class UserService extends Service {
  async reqlogin(user) {
    return await this.app.mysql.select("userdata",{where:{user}});
  }
  async reqreginser(user,pwd,role="经理") {
    return await this.app.mysql.insert("userdata",{user:user,pwd:pwd,role:role});
  }
}
module.exports = UserService;