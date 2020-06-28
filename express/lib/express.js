/**
 * Express ES6版本
 */
const http = require("http");
const Router = require("./router");
class Express {
  constructor() {
    this.server = null;
    this.routers = null;
    //this.routers = new Router(); //初始化路由，也可以把这个做成路由懒加载，放在app.get 或者app.post方法期间动态创建
  }
  handlerRequest(req, res) {
    this.routers.execute(req, res);
  }
  createApp() {
    this.server = http.createServer(this.handlerRequest.bind(this));
    return this;
  }
  listen(...args) {
    let [port, callback] = args; //获得端口和回调函数
    this.server && this.server.listen(port, callback());
  }
  lazyCreateRouter() {
    if (this.routers == null) {
      this.routers = new Router();
    }
  }
  initRouter(...args) {
    this.lazyCreateRouter();
    this.routers.addRouter(args);
  }
  get(...args) {
    args.push("get");
    this.initRouter(...args);
  }
  post(...args) {
    args.push("post");
    this.initRouter(...args);
  }
  put(...args) {
    args.push("put");
    this.initRouter(...args);
  }
  delete(...args) {
    args.push("delete");
    this.initRouter(...args);
  }
}
module.exports = Express;
