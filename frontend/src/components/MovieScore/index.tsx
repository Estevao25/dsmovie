import MovieStars from "components/MovieStars";
import './styles.css';

type Props = {
    score:number;
    count:number;
}

function MovieScore({score, count}:Props) {

    function renderScoreCount(){
        if(count===0){
            return <p className="dsmovie-score-count">Nenhuma avaliação</p>;
        }else if(count===1){
            return <p className="dsmovie-score-count">{count} avaliação</p>;
        }else{
            return <p className="dsmovie-score-count">{count} avaliações</p>;
        }

     }

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            { renderScoreCount() }
        </div>
    );
}

export default MovieScore;