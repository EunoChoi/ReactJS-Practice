import { useEffect, useState } from 'react';

//component
import Movie from '../components/Movie.js';
import Header from '../components/Header.js';

//css
import '../css/Home.css';

function Home() {

    const [loading, setLoading] = useState(true);
    const [loadingDrama, setLoadingDrama] = useState(true);
    const [loadingComedy, setLoadingComedy] = useState(true);
    const [loadingHorror, setLoadingHorror] = useState(true);

    const [movies, setMovies] = useState([]);
    const [dramas, setDramas] = useState([]);
    const [comedies, setComedies] = useState([]);
    const [horrors, setHorrors] = useState([]);


    //api로 정보를 불러온 후 json으로 변경, json 파일을 state로 사용한다
    //arrow function, async, await을 사용, 코드 줄여서 쓰는 경우, 왜 사용할까?
    const getMovies = async () => {
        const json = await (
            //await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating'))
            await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating&limit=10')).json();
        setMovies(json.data.movies);
        setLoading(false)
    };

    const getDramas = async () => {
        const json = await (
            //await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating'))
            await fetch('https://yts.mx/api/v2/list_movies.json?genre=drama&minimum_rating=8.5&sort_by=rating&limit=10')).json();
        setDramas(json.data.movies);
        setLoadingDrama(false)
    };

    const getComedies = async () => {
        const json = await (
            //await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating'))
            await fetch('https://yts.mx/api/v2/list_movies.json?genre=comedy&minimum_rating=8.5&sort_by=rating&limit=10')).json();
        setComedies(json.data.movies);
        setLoadingComedy(false)
    };
    const getHorrors = async () => {
        const json = await (
            //await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating'))
            await fetch('https://yts.mx/api/v2/list_movies.json?genre=horror&minimum_rating=8.5&sort_by=rating&limit=10')).json();
        setHorrors(json.data.movies);
        setLoadingHorror(false)
    };

    /* arrow function, async, await을 사용
    const getMovies = async () => {
      const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year');
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    */

    /* then 사용
    const getMovies = () => {
      fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year')
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
    };
    */


    useEffect(() => {
        getMovies();
        getDramas();
        getComedies();
        getHorrors();
    }, []);


    return (
        <div className="Home">

            <Header />

            <h1 className='Home__Title'>🎬 Today Top 6</h1>
            {loading ?
                <h1 className='Loading'>⏳...</h1> :
                <div>
                    <div className='Home__mainArea'>
                        {movies.slice(0, 6).map((item) => (
                            <Movie
                                key={item.id}
                                cover={item.medium_cover_image}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                genres={item.genres}
                                summary={item.summary} />))}
                    </div>
                </div>
            }
            <div className='Home__btn btnAll'>Go All ⇨</div>

            <h1 className='Home__Title Drama'>📺 Drama Top 3</h1>
            {loadingDrama ?
                <h1 className='Loading'>⏳...</h1> :
                <div>
                    <div className='Home__mainArea'>
                        {dramas.slice(0, 3).map((item) => (
                            <Movie
                                key={item.id}
                                cover={item.medium_cover_image}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                genres={item.genres}
                                summary={item.summary} />))}
                    </div>
                </div>
            }
            <div className='Home__btn btnDrama'>Go Dramas ⇨</div>


            <h1 className='Home__Title Comedy'>🤣 Comedy Top 3</h1>
            {loadingComedy ?
                <h1 className='Loading'>⏳...</h1> :
                <div>
                    <div className='Home__mainArea'>
                        {comedies.slice(0, 3).map((item) => (
                            <Movie
                                key={item.id}
                                cover={item.medium_cover_image}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                genres={item.genres}
                                summary={item.summary} />))}
                    </div>
                </div>
            }
            <div className='Home__btn btnComedy'>Go Comedies ⇨</div>


            <h1 className='Home__Title Horror'>🙀 Horror Top 3</h1>
            {loadingHorror ?
                <h1 className='Loading'>⏳...</h1> :
                <div>
                    <div className='Home__mainArea'>
                        {horrors.slice(0, 3).map((item) => (
                            <Movie
                                key={item.id}
                                cover={item.medium_cover_image}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                genres={item.genres}
                                summary={item.summary} />))}
                    </div>
                </div>
            }
            <div className='Home__btn btnHorror'>Go Horrors ⇨</div>

            
            <div className='Home__bottomArea'>
                <span>
                    <a href='https://github.com/EunoChoi'>🖥 https://github.com/EunoChoi</a>
                </span>
            </div>
        </div >
    );
}

export default Home;