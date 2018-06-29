import React from 'react';

let image;

export default class Card extends React.Component {

    componentDidMount() {
        image = 'https://image.tmdb.org/t/p/original' + this.props.data.backdrop;
        document.body.style.backgroundImage = 'url(' + image + ')';

        let url = `https://api.themoviedb.org/3/movie/${this.props.data.movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`;

        fetch(url)
            .then((result) => result.json())
            .then((data) => {
                this.setState({
                    film: data
                })
            })
    }

    componentWillUpdate() {

        image = 'https://image.tmdb.org/t/p/original' + this.props.data.backdrop;
        document.body.style.backgroundImage = 'url(' + image + ')';

        let url = `https://api.themoviedb.org/3/movie/${this.props.data.movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`;

        fetch(url)
            .then((result) => result.json())
            .then((data) => {
                this.setState({
                    film: data
                })
            })
    }

    render() {

        if (!this.state) {
            return null
        }

        let data = this.state.film;
        let posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
        let totalRevenue = data.revenue;
        let noData = '-';

        // if movie id not found

        if (data.vote === 'undefined' || data.vote === 0) {
            data.vote = noData
        } else {
            data.vote = data.vote + ' / 10'
        }

        if (totalRevenue === 'undefined' || totalRevenue === 0) {
            totalRevenue = noData
        } else {
            totalRevenue = data.revenue;
        }

        return (
            <div className="card-container">
                <div className="poster-container">
                    <img className='poster' src={posterIMG}/>
                </div>
                <div className="data-container">
                    <h1>{data.original_title}</h1>
                    <span className="tagline">{data.tagline}</span>
                    <p>{data.overview}</p>
                    <div className="details">
                        <div className="row release-details">
                            <div className="col-6"> Release Date: <span className="data">{data.release_date}</span>
                            </div>
                            <div className="col-6"> Running Time: <span className="data">{data.runtime} minutes</span>
                            </div>
                            <div className="col-6"> Box Office: <span className="data">${totalRevenue}</span></div>
                            <div className="col-6"> Average Rating: <span className="data">{data.vote_average}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





