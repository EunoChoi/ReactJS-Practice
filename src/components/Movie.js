//상위 컴포넌트 [App.js]로 부터 파라미터의 값을 받아와야한다 -> props
import { Link } from 'react-router-dom';

function Movie({ cover, id, title, rating, genres, summary }) {
    return (
        <div key={id}>
            <h2>
                {/*<a href="/detail">{title} [{rating}]</a>*/}
                <Link to={`detail/${id}`}>{title} [{rating}]</Link>
            </h2>
            {cover ? <img src={cover} ></img> : null}
            <ul>
                {genres ? genres.map((g, index) => (<li key={index}>{g}</li>)) : null}
            </ul>
            <p>{summary}</p>
            <hr></hr>
        </div>)
}


export default Movie;