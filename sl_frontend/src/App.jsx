import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from './pages/Home'
import Methods from "./pages/Methods"
import Condition from "./pages/Condition"
import SuccessStories from "./pages/SuccessStories"


function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

           <Route path="/methods" element={<Methods />} />
           
           <Route path="/conditions" element={<Condition />} />

         <Route path="/success-stories" element={<SuccessStories />} />
 {/*   
          <Route path="/services" element={<Services />} />

          <Route path="/videos" element={<Videos />} /> */}

        </Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App