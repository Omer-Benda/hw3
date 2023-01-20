import React from 'react'
import { useState } from 'react';
import FCIngredient from './FCIngredient';

export default function FCCreateRecipe() {

  const [recepiesNameTxt,setNameTxt]=useState('')
  const [recepiesImageTxt, setImageTxt] = useState('')
  const [recepiesCookingMethodTxt,setCookingMethodTxt]=useState('')
  const [recepiesTimeTxt,setTimeTxt]=useState('')
  const [recepiesCounter,setRecepiesCounter]=useState(3)

  const AddNewRecipe=()=>
  {
    alert(recepiesNameTxt)
    {setRecepiesCounter(prevC=>prevC+1)}
    const apiUrl='https://localhost:44358/api/Recipe'
    fetch(apiUrl, 
      {
      method: 'POST',
      body: JSON.stringify({
        id:recepiesCounter,
        name:recepiesNameTxt,
        image:recepiesImageTxt,
        cookingMethod:recepiesCookingMethodTxt,
        time:recepiesTimeTxt
      }
     ),
      headers: new Headers({
      'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
      })
      })
      .then(res => {
      console.log('res=', res);
      console.log("res status=", res.status)
      return res.json();
      })
      .then((result) => {
      console.log("fetch POST= ", result);
      console.log(result.name);
      },
      (error) => {
      console.log("error post");
      });
  
    }
    







    const [arr,changearr]=useState([]);
    const GetIngredients=()=>
    {
      const apiUrl='https://localhost:44358/api/ingredients'
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
          <h1>Create New Recepies</h1>
    Name:
    <input type="text" value={recepiesNameTxt} name="name" onChange={(e)=>{setNameTxt(e.target.value)}}/>
    <br/>
    Image:
    <input type="text" value={recepiesImageTxt} name="image" onChange={(e)=> {setImageTxt(e.target.value)}} />
   <br/>
   Cooking Method:
    <input type="text" value={recepiesCookingMethodTxt} name="cookingMethod" onChange={(e)=>{setCookingMethodTxt(e.target.value)} }/>
    <br/>
    Time:
    <input type="text" value={recepiesTimeTxt} name="time" onChange={(e)=>{setTimeTxt(e.target.value)} }/>
    <br/>
    
    <button onClick={AddNewRecipe}>Create mew Recipe</button>
    <button onClick={GetIngredients}>Show Ingredients</button>
    {arr.map((ing)=>
        {
          return(
            <FCIngredient 
            key={ing.id} 
            name={ing.name}
            image={ing.image}
            calories={ing.calories}
            />
          )
        }
        )}

    </div>
  )
}
