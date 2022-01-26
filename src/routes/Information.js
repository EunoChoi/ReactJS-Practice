import { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

//component
import Header from '../components/Header';

//css
import '../css/Information.css';

function Information() {

    const [infoLoading, setInfoLoading] = useState(true);

    //const x = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const { id } = useParams();
    //console.log(x);

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((info) => (info.json()))
            .then((json) => {
                setMovieInfo(json.data.movie);
                setInfoLoading(false);
            });
    }, []);
    console.log(movieInfo);
    
    const cover = movieInfo.large_cover_image;
    const genres = movieInfo.genres;
    const year = movieInfo.year;
    const rating = movieInfo.rating;
    const description = movieInfo.description_full;
//
    return (
        <div className='Information'>
            {<Header />}
            <img className='bg' src={movieInfo.background_image}/>

            {infoLoading ? 
            <span className='infoLodingPic'>⏳</span> : 
            <div>
                <img className='info__cover' src={cover}/>
                <div className='infoBox'>
                        <div>
                            <span className='infoBox__title'>{movieInfo.title}</span>
                        </div>
                        <div>
                            <span>{year}</span>
                            <span>⭐️ {rating}</span>                    
                        </div>
                        <ul className='infoBox__ul'>
                        {genres ? genres.slice(0, 3).map((g, index) => (<li key={index}>{g}</li>))
                            : null}
                        </ul>
                        <p className='infoBox__descrition'>{description}</p>
                </div>
            </div>}
        </div>);
    
}
export default Information;
