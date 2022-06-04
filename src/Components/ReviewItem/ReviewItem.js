import React from 'react';

const ReviewItem = (props) => {
    const { name, price, shipping } = props.product;
    return (
        <div>
            <h3>Review: {name}</h3>
        </div>
    );
};

export default ReviewItem;