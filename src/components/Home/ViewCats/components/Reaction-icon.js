import React from 'react'

export const ReactionIcon = ({ name, color = '#ccc' }) => (
    <div className="reaction-icon" style={{ backgroundColor: color }} >
        <ion-icon name={ name }></ion-icon>
    </div>
)