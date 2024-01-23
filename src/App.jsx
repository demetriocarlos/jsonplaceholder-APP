 
import { PublicacionGrid } from "./Components/Pubicacion/PublicacionGrid"
import { Detalles } from "./Components/Pubicacion/Detalles/Detalles"
import {
  BrowserRouter as Router,
   Routes, 
   Route,
   Link 
 } from "react-router-dom"


function App() {
   
    //<PublicacionGrid/>
  return (
    <>
                <Router>
         <header>
           
          <Link className="home" to="/">
            Home
          </Link>
          
         </header>
         <main>
          

         <Routes>
            <Route path="/image/:id" element={<Detalles/> }> 
                Movie
            </Route>
            
            <Route path="/"  element={<PublicacionGrid/> }>
                Home
            </Route>
         </Routes>
         </main>
      </Router>
       
       
    </>
  )
}

export default App
