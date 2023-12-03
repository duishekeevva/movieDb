import React from 'react';
import {IMAGE_URL} from "../../config/config";

function MovieList({movies}) {
    return (
        <div className={'row'}>
            {
                movies.map((movie) => (
                    <div className={'col-2'}>
                        <div className={'movie-box'}>
                            <img className={'movie-img'} src={`${IMAGE_URL}${movie.poster_path}`}/>
                            <h4>{movie.title}</h4>
                            <p>{movie.vote_average}</p>
                        </div>
                    </div>
                ))

            }
        </div>
    );
}

export default MovieList;