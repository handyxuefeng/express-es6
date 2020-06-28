
/**
 * Express ES6版本
*/
const http = require('http');
const Router = require('./router');
class Express {
    constructor(){
        this.server = null;
        this.routers = new Router(); //初始化路由
    }
    handlerRequest(req,res){
      this.routers.execute(req,res);
    }
    createApp(){
      this.server =  http.createServer(this.handlerRequest.bind(this));
      return this;
    }
    listen(...args){
        let [port,callback]=args; //获得端口和回调函数
        this.server && this.server.listen(port,callback());
    }
    get(...args){
       args.push("get");
       this.routers.addRouter(args);
       //console.log("get方法，参数= ", args);
    }
    post(...args){
      args.push("post");
      this.routers.addRouter(args);
    }

}
module.exports = Express;