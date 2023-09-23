import React from 'react'
import '../App.css'
import logo from './assets/logo2.png'
import RecipeItem from './RecipeItem'
import recipeItemsList from './AppData'


function RecipeList(){
    const recipeItems= recipeItemsList.map(item=>{
    return <RecipeItem  key={item.id} element={item}/>
})
   
  return (
    <>
    <header>
    <div className='hero-container'>
      <div className='logo-container'>
        <img src={logo} alt=''/>
      </div>
      <h1 className='recipe-list-hero-text'>Welcome to the<br/> Ultimate Cake<br/> Recipe Book! <br/></h1>
     </div>
  </header>

  <main className='recipe-list' id='top'>
      <h1>Pick a delicious recipe below and start baking!</h1>
         {recipeItems}
   </main>

  </>
  )
}

export default RecipeList