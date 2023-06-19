import {useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'

// Imported react redux hooks

//movie Description Component function that is called in APP
function MovieDescription() {
    const history = useHistory()
    const details = useSelector(store => store.details)
    const allGenres = useSelector(store => store.genres)
   const handleBack = () => {

        history.push('/')
    }

    return (
        <div>
        <h3>{details.title}</h3>
        <img src={details.poster} />
        <p>{details.description}</p>
        {allGenres.map(genre => (
            <div key={genre.genres_id} > 
                <h4>{genre.genre}</h4>
            </div>
        ))}
        <button onClick={handleBack}> Back</button>
        </div> )
}

export default MovieDescription