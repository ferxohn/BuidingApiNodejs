const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.get('/user', (req, res) => {
    const user = {
        username: "foo",
        id: 222
    }
    console.log(req.body);
    res.send(JSON.stringify(user));
})

app.post('/user', (req, res) => {
    console.log(req.body);
})

app.listen(3002, () => {
    console.log('Servidor corriendo....');
})