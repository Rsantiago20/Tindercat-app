import React from 'react'

export const ReactionIcon = ({ name, color = '#ccc', onPress }) => (
    <div className="reaction-icon" style={{ backgroundColor: color }} onClick={onPress} >
        <ion-icon name={ name }></ion-icon>
    </div>
)