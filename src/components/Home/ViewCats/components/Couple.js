import React from 'react'

export const Couple = ({ image, username, description }) => (
    <div className="image-couple">
        <img src={ image } />
        <h3>{ username }</h3>
        <p>{ description }</p>
    </div>
)