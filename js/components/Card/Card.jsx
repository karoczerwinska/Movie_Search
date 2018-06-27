import React from 'react';

import './Card.scss';

let image;

export default class Card extends React.Component {


    render() {

        let data = this.props.data;

        let production = data.production;

        let posterIMG = 'https://image.tmdb.org/t/p/w500' + data.poster;

        let genres = data.genre;

        let totalRevenue = data.revenue;

        let productionList = dataToString(production);

        let genresList = dataToString(genres);

        let noData = '-';

        image = 'https://image.tmdb.org/t/p/original' + data.backdrop;


        // jeżeli nie znaleziono ID filmu

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

        if (data.poster == null) {
            posterIMG = 'https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png';
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

                        <span className="genre-list">{genresList}</span>
                        <span className="production-list">{productionList}</span>

                        <div className="row release-details">

                            <div className="col-6"> Release Date: <span className="data">{data.release}</span></div>

                            {/*<div className="col-6"> Running Time: <span className="data">{data.runtime} minutes</span>*/}
                            {/*</div>*/}
                            {/*<div className="col-6"> Box Office: <span className="data">${totalRevenue}</span></div>*/}

                            <div className="col-6"> Average Rating: <span className="data">{data.vote}</span></div>

                        </div>

                    </div>

                </div>

            </div>
        )

    }

    componentDidUpdate() {

        document.body.style.backgroundImage = 'url(' + image + ')';

    }
}


function dataToString(stringData) {
    let stringArray = [];

    stringArray.forEach(function (item, i) {
        stringArray.push(item.name);
    });
    let resultString = stringArray.join(', '); // array to string
    return resultString;
};
