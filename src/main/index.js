const express = require('express')
const app = express()
const port = 5000

app.get('/toggles', (req, res) => {
    res.send(['Rede', 'number']);

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});