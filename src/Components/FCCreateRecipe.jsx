import React from 'react'
import { useState } from 'react';
import FCIngredient from './FCIngredient';

export default function FCCreateRecipe() {

    const [arr,changearr]=useState([]);
    const GetIngredients=()=>
    {
      const apiUrl='https://localhost:44338/api/ingredients'
      fetch(apiUrl, 
        {
        method: 'GET',
        headers: new Headers({
          'Content-Type':'application/json; charset=UTF-8',
          'Accept':'application/json; charset=UTF-8',
          })
          
        })
      .then(res => {
      console.log('res=', res);
      return res.json()
      })
      .then(
      (result) => {
      changearr(result)
  
      },
      (error) => {
      console.log("err post=", error);
      });

      
      
    }

  return (
    <div>
    <button onClick={GetIngredients}>Show Ingredients</button>
    {arr.map((ing)=>
        {
          return(
            <FCIngredient 
            key={ing.Id} 
            name={ing.Name}
            image={ing.Image}
            calories={ing.Calories}
            />
          )
        }
        )}

    </div>
  )
}
