import express from 'express'

const app = express();
const port = 8080;


app.get('/healthcheck', (req, res) => {
    res.status(200).send()
})

app.post('/hello', (req, res) => {
    res.send({ 'msg': 'Hello! Welcome to Cloudys!!' });
})

app.listen(port, () => {
    console.log('Started.. Listening port 8080 ..');
})


export default app;