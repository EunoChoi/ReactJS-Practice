import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
function Detail() {
    //const x = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const { id } = useParams();
    //console.log(x);
    console.log(id);

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((info) => (info.json()))
            .then((json) => {
                setMovieInfo(json.data.movie);
            });
    }, []);
    //console.log(movieInfo);
    return (<div>
        <h1>{movieInfo.title}</h1>;
    </div>)
}

export default Detail;