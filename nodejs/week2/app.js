const express = require('express')
const router = express.Router();
const app = express();
const port = 3000;
const knex = require('./documents');

// Support parsing JSON requests
app.use(express.json())
// GET /search

app.get('/', (req, res) => {
  res.send('This is a search engine')
})

app.get('/search', async (req, res) => {
  const searchData = await knex.filter(element => Object.values(element).find(word => String(word).includes(req.query.q)));

  if (req.query.params == 'q' && searchData.length > 0) {
    res.json(searchData);
  } else {
    res.json(knex)
  }
});


// GET /documents/:id

app.get('/documents/:id', async (req, res) => {

  const data = await knex.find(element => element.id == req.params.id);
  if (data) {
    res.json(data);
  } else {
    res.sendStatus(404)
  }
});


// post /search

app.post('/search', async (req, res) => {
  const fields = req.body.fields;
  const searchData = await knex.filter(element => Object.keys(element).find(key => String(key).includes(Object.keys(fields))))

  if (req.query.params == 'q' && fields.length !== 0) {
    res.status(404).json({ error: "Bad Request: query paramer 'q' and request body 'fields' can not be provided at the same time!" })
  } else if (fields.length == 0 || searchData.length == 0) {
    res.status(404).json({ error: "Not found" })
  } else {

    res.json(searchData)
  }

});


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});