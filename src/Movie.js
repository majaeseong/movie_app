import React from 'react';
import PropTypes from 'prop-types'
import LineEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie({name, poster,genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={name}/> 
            </div>
            <div className="Movie_Columns">
                <h1>{name}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre,index)=> <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie_Synopsis">
                <LineEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis=' ... '
                    trimRight
                    basedOn='letters'
                />
            </div>
            </div>
            
        </div>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre}</span>
    )
}

MovieGenre.propTypes ={
    genre : PropTypes.string.isRequired
}

Movie.propTypes={
    name : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    synopsis : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
}


//functional component
function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title ={alt} className="Movie_Poster"/>
    )
}

MoviePoster.propTypes={
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

export default Movie