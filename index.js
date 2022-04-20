const app = require('express')();

const articles = require('./articles.json');

const pick = (a) => a[Math.floor(Math.random() * a.length)];

app.set('view engine', 'pug');

app.get('/', (_, res) => {
  const { title, author, text } = pick(articles);
  res.render('index', {
    title: 'Hey',
    message: 'Hello there!',
    articleTitle: title,
    articleAuthor: author,
    articleContent: text,
  });
});

app.listen(8092, () => { console.log('listening ... '); });

console.log('i am cool');
