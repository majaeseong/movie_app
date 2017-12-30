import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state ={
  }

   componentDidMount(){
     this._getMovies()
 
  }

  _renderMovies = () =>{
    const movie_array = this.state.movie_array.map((movie) =>{
      return <Movie name={movie.title_english} 
                    poster={movie.medium_cover_image} 
                    genres ={movie.genres}
                    synopsis = {movie.synopsis}
                    key={movie.id} />
    })
    return movie_array
  }

   _getMovies = async() =>{
    const movie_array = await this._callApi() //return value가 무엇이든
    //끝나기를 기다리고 그 값을 movie_array에 넣는다.
    //그리고 끝난 후에 아래에 코드가 있으면 그것이 실행된다.
    this.setState({
        movie_array //그냥 이렇게 적으면 movie_array : movie_array와 같다
    })
  }

  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response =>response.json())          //if success
    .then(json=> json.data.movies) //화살표는 리턴이 자동임.
    .catch(err => console.log(err))       //if error
  }

  render() {
    const {movie_array} = this.state;
    return (
      <div className={movie_array ? "App" : "App_Loading"}>
        {/* state 안에 movie_array가 있는지 질문 */}
        {this.state.movie_array ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
