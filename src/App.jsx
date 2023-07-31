import React from "react"

import  Header from "./component/header"
import Home from "./component/Home"
import { BrowserRouter  , Route , Routes} from "react-router-dom"
import About from "./component/About"
import Contact from "./component/contact"

function App() {
  return (
 
<BrowserRouter>

      
<Header/>

   <Routes>
  <Route path="/" element ={<Home/>}/>
 <Route path = "/about" element= {<About/>}/>
 <Route path = "/contact" element= {<Contact/>}/>

</Routes>

  
</BrowserRouter>
  )
}

export default App ;
