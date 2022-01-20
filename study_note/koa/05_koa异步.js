const Koa = require('koa');
const app = new Koa();

const middlewarel1 = async (ctx, next) => { // 2. 解决方法: async await
    ctx.message = 'aaa';
    await next();
    ctx.body = ctx.message;   //同步 aaa  // 1. 异步aaabbb
}
const middlewarel2 = async (ctx, next) => {
    ctx.message += 'bbb';
    await next();
}
const middlewarel3 = async (ctx, next) => {
    const res = await axios.get('xxxxx');
    ctx.message += res.data;
}
// koa中next的返回值是promise对象

app.use(middlewarel1);
app.use(middlewarel2)
app.use(middlewarel3)

app.listen(8000, () => {
    console.log('8000 run');
})