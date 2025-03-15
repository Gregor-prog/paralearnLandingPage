import Institutions from "./pages/institutionsPage"
import LandingPage from "./pages/landingPage"
import BlogPage from "./pages/blogPage"
import Pricing from "./pages/pricingPage"
import About from "./pages/AboutusPage"
import Login from "./pages/login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contact from "./pages/contactUS"
function App(){
  return <div className="w-[100dvw] overflow-x-hidden">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
       <Route path="/institutions" element={<Institutions/>}/>
       <Route path="/Blog"  element={<BlogPage/>}/>
       <Route path="/Pricing"  element={<Pricing/>}/>
       <Route path="/About" element={<About/>}  />
       <Route path="/contact" element={<Contact/>}  />
    </Routes>
    </BrowserRouter>
  </div>
}

export default App