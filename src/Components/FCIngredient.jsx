import React from 'react'

export default function FCIngredient(props)
 {
  return (
    <div className='ingredient'>
        <img src={props.image} style={{width:300, height:250}}></img>
        <p>Name: {props.name}</p>
        <p>Calories: {props.calories}</p>
    </div>
  )
}
