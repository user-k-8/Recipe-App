import React from 'react'
import logo from '../components/assets/logo2.png'
import '../App.css'
import {  useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Recipe = () => {
  const location = useLocation()
  const { element } = location.state
  return (
    <>
        <header>
           <div className='hero-container' id="head">
               <div className='logo-container'>
                   <img src={logo} alt=''/>
              </div>
              <h1 className='recipe-details-hero-text'>Your Recipe - <br/> {element.title} </h1>
           </div>
         </header>

         <main className='recipe-list'>
              <div className='back-button-container'>
                  <Link to= {{pathname:"/" , hash: "top"}}> <button   className='button back-button'>Back</button></Link>
              </div>

              <h1>{element.title}</h1>
              <hr className='section-line'/>
              <br/><br/>

              <section>
                  <h2>Ingredients</h2>
                 <p>{element.ingredients}</p>
              </section>

              <section>
                <h2>Preparation Steps</h2>
                <p>{element.preparationSteps}</p>
             </section>

              <hr className='section-line'/>

              <section className='final-result-section'>
                <div>  
                      <h2>Final Result</h2><br/>
                      <div className='back-button-container'>
                      <Link to= {{pathname:"/" , hash: "top"}}> <button   className='button back-button'>Back</button></Link>
                     </div>
                </div>
                <p><img src={element.img} alt='' className='recipe-details-image'/></p>
             </section>
      </main>
    </>
  )
}

export default Recipe