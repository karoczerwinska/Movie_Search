import React from 'react';

import 'whatwg-fetch'

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

