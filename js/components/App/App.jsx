import React from 'react';

import 'whatwg-fetch'

import './App.scss';
import Card from '../Card/Card.jsx';
import Search from '../Search/Search.jsx';

export default class App extends React.Component {


    constructor(props) {
        super(props)

    }

    componentDidMount() {

        this.fetchMovieByName("nemo")

    }

// API

    fetchApi(url) {

        fetch(url)
            .then((result) => result.json())
            .then((data) => {

                const result = data.results[0] ? data.results[0] : data;
                this.setState({

                    movieID: result.id,
                    original_title: result.original_title,
                    tagline: result.tagline,
                    overview: result.overview,
                    homepage: result.homepage,
                    poster: result.poster_path,
                    production: result.production_companies,
                    production_countries: result.production_countries,
                    genre: result.genres,
                    release: result.release_date,
                    vote: result.vote_average,
                    runtime_time: result.runtime,
                    revenue: result.revenue,
                    backdrop: result.backdrop_path

                })
            })
    }

    fetchMovieByName = (movieName) => {

        let url = `https://api.themoviedb.org/3/search/movie?api_key=7c307736c2323ed35f5b7032e78deaea&query=${movieName}`;

        this.fetchApi(url)
    };

    render() {

        if (this.state) {
            return (
                <div>
                    <Search fetchFilm={this.fetchMovieByName}/>
                    <Card data={this.state}/>
                </div>
            )
        } else {
            return null
        }


    }

}









//     constructor(props) {
//         super(props);
//         this.state = {
//             movieID: 12 // pierwszy film, który sie wyswietla po załadowaniu strony
//         }
//     }
//
//     fetchApi(url) {
//
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => {
//
//             this.setState({
//                 movieID: data.id,
//                 original_title: data.original_title,
//                 tagline: data.tagline,
//                 overview: data.overview,
//                 homepage: data.homepage,
//                 poster: data.poster_path,
//                 production: data.production_companies,
//                 production_countries: data.production_countries,
//                 genre: data.genres,
//                 release: data.release_date,
//                 vote: data.vote_average,
//                 runtime: data.runtime,
//                 revenue: data.revenue,
//                 backdrop: data.backdrop_path
//
//             })
//         })
//
//         // .catch((error) => console.log('Movie not found!'))
//
//     }
//
//     fetchMovieID = (movieID) => {
//         let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`
//         this.fetchApi(url)
//     }
//
//     componentDidMount() {
//         let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`
//         this.fetchApi(url)
//     }
//
//     render() {
//         return (
//             <div>
//                 <Search fetchMovieID={this.fetchMovieID}/>
//                 <Card data={this.state}/>
//             </div>
//         )
//     }
// }

