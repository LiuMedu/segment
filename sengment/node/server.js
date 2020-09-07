const express = require('express');
const { cut } = require('../pkg/segment_lib.js');

const app = express();
const port = 8080;
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.redirect("/index.html"));

app.post('/cut', function (req, res) {
  var sent = parseFloat(req.body.sent);
  res.send(cut(sent))
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

