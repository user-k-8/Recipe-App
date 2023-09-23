import React from 'react'
// import {Link} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
function RecipeItem({element}){


    return (
    <>
        <hr className='section-line'/>
        <section className='menu-item-container'>
           <div className='image-container'>
              <img src={element.img} alt={element.id}/>
           </div>
           <div className='menu-text menu-item'>
               <h2 className='menu-heading'>{element.title}</h2>
                  {element.shortDescription}
                  <br/><br/>
                  <Link to= {{pathname:`/recipe/${element.id}`, hash: "head"}}  state={{element}}>
                      <button onClick={ ()=>{console.log(element)}}  className='button'>Read Recipe</button>
                  </Link>
             </div>
          </section>
    </>
  )
}

export default RecipeItem