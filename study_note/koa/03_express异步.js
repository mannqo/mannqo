const express = require('express');
const axios = require('axios');

const app = express();

const middlewarel1 = (req, res, next) => {
    req.message = 'aaa';

    // 这里如果写成 await next() 也没用，next()不是一个promise对象，不会对next进行异步处理，;
    next();

    /** 如果要同步，要添上这句代码 **/
    // await middlewarel3();
    

    res.end(req.message);   //同步
}
const middlewarel2 = (req, res, next) => {
    req.message += 'bbb';
    next();
}
const middlewarel3 = (req, res, next) => {
    await axios.get('xxxxx').then(result=>{
        req.message += result.data;
    });

    // 在express中这样写req.message返回结果和resule.data没有关系
}

app.use(middlewarel1, middlewarel2, middlewarel3);

app.listen(8000, () => {
    console.log('8000 run');
})