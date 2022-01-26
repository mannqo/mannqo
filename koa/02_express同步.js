const express = require('express');
const app = express();

const middlewarel1 = (req, res, next) => {
    req.message = 'aaa';
    next();
    res.end(req.message);   //同步 aaabbbccc
}
const middlewarel2 = (req, res, next) => {
    req.message += 'bbb';
    next();
}
const middlewarel3 = (req, res, next) => {
    req.message += 'ccc';
    console.log(req.message);
}

app.use(middlewarel1, middlewarel2, middlewarel3);

app.listen(8000, () => {
    console.log('8000 run');
})