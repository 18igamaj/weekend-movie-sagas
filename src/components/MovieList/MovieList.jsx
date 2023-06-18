import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory()

    const handleDetails = (movie) => {
        console.log(movie.id)

        dispatch({
            type: 'GET_DETAILS',
            payload: movie
        })
        dispatch({
            type:'FETCH_GENRES',
            payload: movie
            
        })

        history.push(`/detail`)

    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}  >
                            <h3>{movie.title}</h3>
                            <img onClick={() => handleDetails(movie) } src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;