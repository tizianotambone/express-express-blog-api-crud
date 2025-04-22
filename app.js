
const express = require('express');

const app = express();
const port = 3001;
const blogrouters = require('./routers/posts.js')

app.use('/blog', blogrouters);
console.log(blogrouters)

app.listen(port, () => {
  console.log(`lista dei post:${port}`);
});

