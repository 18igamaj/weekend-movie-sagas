import {useHistory} from 'react-router-dom'




function MovieDescription() {
    const history = useHistory()
   const handleBack = () => {

        history.push('/')
    }

    return (
        <div>
        <h3>This movie is great!</h3>
        <img src
        <button onClick={handleBack}> Back</button>
        </div> )
}

export default MovieDescription