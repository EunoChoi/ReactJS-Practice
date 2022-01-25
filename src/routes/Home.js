import { useEffect, useState } from 'react';

//component
import Movie from '../components/Movie.js';
import Header from '../components/Header.js';

//css
import '../css/Home.css';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);


    //api로 정보를 불러온 후 json으로 변경, json 파일을 state로 사용한다
    //arrow function, async, await을 사용, 코드 줄여서 쓰는 경우, 왜 사용할까?
    const getMovies = async () => {
        const json = await (
            await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'))
            .json();
        setMovies(json.data.movies);
        setTopMovies(json.data.movies.slice(0, 10));
        setLoading(false);
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
    }, []);

    console.log(movies);

    return (
        <div className="Home">
            <Header />
            {loading ?
                <h1 className='Loading'>Loading...</h1> :
                <div>
                    <h1 className='todayTopText'>Today Top 10</h1>
                    <div className='Home__mainArea'>
                        {topMovies.map((item) => (
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
        </div >
    );
}

export default Home;