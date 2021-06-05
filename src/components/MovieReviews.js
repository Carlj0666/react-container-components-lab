// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {

    const renderReviews = () => {
        return reviews.map((review, index) => {
            return <li className="review" key={index}>{review.display_title}: Summary:{review.summary_short}</li>
        })
    }

    return (
        <div className="review-list">
            <ul>
                {renderReviews()}
            </ul>
        </div>
    )
}

MovieReviews.defaultProps = {
     reviews: []
}

export default MovieReviews