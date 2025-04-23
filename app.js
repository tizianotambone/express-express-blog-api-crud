
const express = require('express');

const app = express();
const port = 3001;
const blogrouters = require('./routers/posts.js')
// indico ad express di trattare i body in forma json
app.use(express.json()) 

app.use('/blog', blogrouters);
console.log(blogrouters)

app.listen(port, () => {
  console.log(`lista dei post:${port}`);
});

