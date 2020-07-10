import React from 'react'

export const Couple = ({ image, nick, bio }) => (
    <div className="image-couple">
        <img src={ image } />
        <h3>{ nick }</h3>
        <p>{ bio }</p>
    </div>
)