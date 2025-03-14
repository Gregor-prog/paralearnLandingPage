import Institutions from "./pages/institutionsPage"
import LandingPage from "./pages/landingPage"
import BlogPage from "./pages/blogPage"
import Pricing from "./pages/pricingPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App(){
  return <div className="w-[100dvw] overflow-x-hidden">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
       <Route path="/institutions" element={<Institutions/>}/>
       <Route path="/Blog"  element={<BlogPage/>}/>
       <Route path="/Pricing"  element={<Pricing/>}/>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App