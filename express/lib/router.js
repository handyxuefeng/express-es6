/**
 * 路由设计
 */
const url = require("url");
function notMatchHandler(req,res) {
    return res.end( `这个 ${url.parse(req.url).pathname} 请求的 ${req.method} 方法没有找到`);
} 
class Router {
  constructor() {
    this.router = [{ path: "*", method: "get", handler: notMatchHandler }];
  }
  addRouter(args) {
    let [path, handler, method] = args; //解构参数
    this.router.push({ path, method, handler });
  }
  execute(req, res) {
    let path = url.parse(req.url).pathname;
    let method = req.method.toLowerCase();
    let index = 0;
    for (let i = 0; i < this.router.length; i++) {
      let item = this.router[i];
      if (item.path === path && method === item.method) {
        index = i;
        break;
      }
    }
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    return this.router[index].handler(req, res);
  }
}
module.exports = Router;
