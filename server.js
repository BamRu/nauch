const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));	
app.use("/node_modules", express.static('./node_modules/'));

app.get('/', (req, res) => {
  res.sendfile('index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})