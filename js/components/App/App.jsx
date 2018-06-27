import React from 'react';

import 'whatwg-fetch'

import './App.scss';
import Card from '../Card/Card.jsx';
import Search from '../Search/Search.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movieId: 12,

        }
    }

    componentDidMount() {

        let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?&api_key=7c307736c2323ed35f5b7032e78deaea`;

        this.fetchApi(url)

    }

    // API

    fetchApi(url) {

        fetch(url).then((res) => res.json()).then((data) => {

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
                runtime: result.runtime,
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
        return (
            <div>
                <Search fetchFilm={this.fetchMovieByName}/>
                <Card data={this.state}/>
            </div>
        )
    }
}



