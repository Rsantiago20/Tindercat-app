import React from 'react'

export const NavigationIcon = ({ name, onPress }) => (
    <div onClick={ onPress } className="navigation-icon">
        <ion-icon name={ name }></ion-icon>
    </div>
)