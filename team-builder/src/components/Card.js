import React from 'react'

export default function Card(props) {
    return (
        <div>
            <h1>{props.item.name}</h1> 
            <p>{props.item.email}</p>
            <p>{props.item.job}</p>
        </div>
    )
}
