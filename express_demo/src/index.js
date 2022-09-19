const express = require("express");
const app = express();
const formidable = require('express-formidable') // 引入

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(formidable())
// app.use((req, res, next) => {
//     console.log("querying strat level 1");
//     next();
//     console.log("querying end level 1");
// });

// app.use((req, res, next) => {
//     console.log("querying strat level 2");
//     next();
//     console.log("querying end level 2");
// });

// app.use((req, res, next) => {
//     console.log("querying strat level 3");
//     next();
//     console.log("querying end level 3");
// });


// app.get('/', (req, res) => {
//     res.send("hello world!!!")
// });

app.post('/upload', (req, res) => {
    console.log(req.fields)
    console.log(req.files)
    // console.log(222, res)
    res.send('success')
})

app.listen(3001, () => {
    console.log(" Express server is running in 3001")
})