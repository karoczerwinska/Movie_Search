import React from 'react';

import './Search.scss';

const logo = 'https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg';


export default class Search extends React.Component {

    handleClick = (event) => {

        event.preventDefault();

        this.props.fetchFilm(this.userValue.value)
    };

    render() {

        return (
            <div className="search-container">

                <div className="search-row">

                    <div className="logo">

                        <a href="./"><img src={logo} className="logo" alt="Logo"/></a>

                    </div>

                    <div className="search">

                        <form className="searchbox form-control">

                            <label>
                            <input ref={input => this.userValue = input} className="searchbox__input"
                                   placeholder="Search Movie Title..."/>
                            </label>
                            <button onClick={this.handleClick} className='search-btn'>search</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};



