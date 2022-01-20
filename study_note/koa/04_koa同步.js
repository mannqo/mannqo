const Koa = require('koa');
const app = new Koa();

const middlewarel1 = (ctx, next) => {
    ctx.message = 'aaa';
    next();
    ctx.body = ctx.message;   //同步 aaa
}
const middlewarel2 = (ctx, next) => {
    ctx.message += 'bbb';
    next();
}
const middlewarel3 = (ctx, next) => {
    ctx.message += 'ccc';
    console.log(ctx.message);
}

app.use(middlewarel1);
app.use(middlewarel2)
app.use(middlewarel3)

app.listen(8000, () => {
    console.log('8000 run');
})