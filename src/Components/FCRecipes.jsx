import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FCRecipes() {

const navigate= useNavigate();
const gotocreater=()=>
{
navigate('createrecipe')
}
const gotocreateing=()=>
{
    navigate('createingredient')
}
   
  return (
    <div>
    
        Your Recipes
        <br></br>
        <button onClick={gotocreater}>Create New Recipe</button>
        <button onClick={gotocreateing}>Create New Ingredient</button>

      
    </div>
  )
}
