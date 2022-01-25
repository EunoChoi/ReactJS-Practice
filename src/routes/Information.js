import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

//component
import Header from '../components/Header';

//css
import '../css/Information.css';

function Information() {

    //const x = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const { id } = useParams();
    //console.log(x);

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((info) => (info.json()))
            .then((json) => {
                setMovieInfo(json.data.movie);
            });
    }, []);
    console.log(movieInfo);
    
    /*
    const bgStyle = {
        width : "100vw",
        height : "100vh",
        backgroundImage: `url(${movieInfo.large_cover_image})`
    };*/
    
    return (
        <div className='Information'>
            <img className='bg' src={movieInfo.background_image}/>

            {<Header />}
            
        </div>);
}
//<span>{movieInfo.title}</span>
export default Information;