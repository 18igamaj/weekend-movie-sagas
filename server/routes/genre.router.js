const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// added params to target the id of movies to be received from get request on client index
router.get('/:id', (req, res) => {
  // Add query to get all genres
  const idView = req.params.id
  const sqlText =  `SELECT movies.title, genres.name AS genre, movies.id, genres.id AS genres_id
  FROM movies
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON genres.id = movies_genres.genre_id
  WHERE "movies"."id" = $1;`

    pool.query(sqlText,[idView])
    .then(result => {
      console.log(result.rows)
      res.send(result.rows)
    }).catch(err => {
      console.log('Server Genre GET', err)
      res.sendStatus(500)
    })
 
});

module.exports = router;