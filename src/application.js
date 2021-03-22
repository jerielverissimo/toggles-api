const express = require('express')
const app = express()
const port = 5000

const mainRouter  = require("./main/gateways/http/router")(express.Router());
app.use("/", mainRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});