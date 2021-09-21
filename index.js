const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
res.render('index.ejs');
})

app.get('/listagemnoticias', (req, res) => {
res.render('listagemnoticias');
})

app.get('/apresentanoticias', (req, res) => {
res.render('apresentanoticias');
})

app.listen(3000, () => {
console.log('o servidor está ok')
})


