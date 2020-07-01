import React from 'react'

export const Avatar = ({ image, nick }) => (
    <div className="avatar">
        <img src={ image } />
        <p>{ nick }</p>
    </div>
)