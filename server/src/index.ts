import * as express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("Recieved message at /!");
})

app.get('/testing', (req, res) => {
    res.send('TESTING!!!!')
    console.log("Recieved message at /testing!");
})

app.listen(8000, () => {
    console.log(`Server is listening on port 8000`);
});