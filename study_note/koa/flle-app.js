const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');

const app = new Koa();
const uploadRouter = new Router({ prefix: '/upload' });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname+'/public/images');
    },    // 文件存放路径
    filename: (req, file, cb) => {
        cb(null, 'newName.jpg');
    },    // 重命名
})
const limits = {
    fields: 10, // 非文件字段的数量
    fileSize: 500 * 1024,  // 文件大小 单位b
    files: 1 // 文件数量
}
const upload = multer({ storage, limits })
        

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
    console.log(ctx.req.file);
    ctx.response.body = '上传成功';
})
app.use(uploadRouter.routes());

app.listen(8000, () => {
    console.log('8000 run');
})