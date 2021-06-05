import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
const SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
            + `&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(SEARCH_URL + this.state.searchTerm)
        .then(response => response.json())
        .then(data => {
            const reviews = data.results ? data.results : []
            this.setState({
                reviews: data.results,
                searchTerm: ""
            })
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input name="title"
                    onChange={this.handleChange} 
                    value={this.state.searchTerm}
                    ></input>
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}