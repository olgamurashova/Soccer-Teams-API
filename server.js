const express = require('express');
const app = express();
const port = process.env.port || 4001;
const bodyParser = require('body-parser');
const lionsRouter = require('/routesRouters.js');
const tigersRouter = require('/routesRouters.js');


app.use(bodyParser.json());
app.use('/teamlions/players', lionsRouter);
app.use('/teamtigers/players', tigersRouter);

app.listen(port, () => {
    console.log(`The server is listening on ${port}.`);
});