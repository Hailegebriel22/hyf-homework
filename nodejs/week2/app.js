const { query } = require('express');
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

  if (('q' in req.query) && searchData.length > 0) {
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
  const fields = req.body.fields

  if (('q' in req.query) && ([fields].length > 0 && fields !== undefined)) {

    res.status(404).json({ error: "Bad Request: query paramer 'q' and request body 'fields' can not be provided at the same time!" });
  }
  else if ([fields].length > 0 && fields !== undefined) {
    let bodySearch = await knex.filter(element => Object.values(element).find(word => String(word).includes(Object.keys([fields]))))
    if (bodySearch.length > 0) {

      res.json(bodySearch);
    } else {
      res.status(404).json({ error: "Data Not found body search" });
    }

  }
  else if ('q' in req.query) {
    let querySearch = await knex.filter(element => Object.values(element).find(word => String(word).includes(req.query.q)));
    if (querySearch.length > 0) {
      res.json(querySearch)
    } else {
      res.status(404).json({ error: "Data Not found query param search" })
    }

  }

  else {
    res.status(404)
  }

});


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});