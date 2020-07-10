import React from 'react'

const fillStyle = {
    background: '#07ABA0',
    border: '#05635d',
    color: '#fff'
}

export const InterestOne = ({ name = '...', status = false }) => (
    <div onClick={() => {alert("Hola")} } style={ status ? fillStyle: null } className="interest-one">
       { name }
    </div>
)