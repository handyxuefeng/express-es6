/**
 * express 官方采用的es5编写的，下面采用es6自定义实现一个express
 */
const Express = require("./express");
const chalk = require("chalk");
const port = 8000;
const port2 = 9000;
const app = new Express().createApp(); //创建一个应用 , koa 是 const app = new Koa();

// //1.路由的管理,调用回调时，req,res 是原生http传入的（req,res在内部也被扩展了）
app.get("/", (req, res) => {
  res.end("ok");
});

app.get("/add", (req, res) => {
  //内部不会将回调函数包装成promise
  res.end("adddd");
});
app.get("/reg", (req, res) => {
  //内部不会将回调函数包装成promise
  res.end("注册");
});

app.listen(port, () => {
  console.log(chalk.yellowBright(port + "端口已经启动......"));
});

//---------------------
const app2 = new Express().createApp(); //创建一个应用 , koa 是 const app = new Koa();

// //1.路由的管理,调用回调时，req,res 是原生http传入的（req,res在内部也被扩展了）
app2.get("/res", (req, res) => {
  res.end("aokkkkkkk");
});

app2.post("/remove", (req, res) => {
  //内部不会将回调函数包装成promise
  res.end("remove");
});

app2.listen(port2, () => {
  console.log(chalk.yellowBright(port2 + "端口已经启动......"));
});
