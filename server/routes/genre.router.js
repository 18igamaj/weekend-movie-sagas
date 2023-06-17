const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// added params to target the id of movies to be received from get request on client index
router.get('/:id', (req, res) => {
  // Add query to get all genres
  const idView = req.params.id
  const sqlText =  `SELECT FROM genres."name" AS genre FROM genres JOIN 
    "movies_genres ON genres.id = movies_genres.id 
    JOIN movies on movies.id = movies_genres.id
    WHERE movies.id = $1`
  res.sendStatus(500)
});

module.exports = router;