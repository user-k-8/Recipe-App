import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import Footer from './components/Footer'
import './App.css'
  
function App() {
 
    return (
        <div>

<BrowserRouter>
                
                <Routes>
                    <Route exact path="/recipe-app" element={<RecipeList/>} />
                    <Route  path="/recipe/:id" element={<Recipe/>} />                 
                </Routes>
                     
                <Footer/>
</BrowserRouter>
         
         
        </div>
    );
}
  
export default App;