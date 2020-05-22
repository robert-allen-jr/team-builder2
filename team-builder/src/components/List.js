import React, {useState} from 'react'
import Card from './Card'

export default function List(props) {


    return (
        <div>
            {props.teamMembers.map((item) => {
               return <Card item={item}/>
            })}
        </div>
    )
}
