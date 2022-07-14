const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("querying strat level 1");
    next();
    console.log("querying end level 1");
});

app.use((req, res, next) => {
    console.log("querying strat level 2");
    next();
    console.log("querying end level 2");
});

app.use((req, res, next) => {
    console.log("querying strat level 3");
    next();
    console.log("querying end level 3");
});


app.get('/', (req, res) => {
    res.send("hello world!!!")
});

app.listen(3001, () => {
    console.log(" Express server is running in 3001")
})