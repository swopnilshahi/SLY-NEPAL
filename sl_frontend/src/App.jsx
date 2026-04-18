import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from './pages/Home'
import Methods from "./pages/Methods"
import Condition from "./pages/Condition"
import SuccessStories from "./pages/SuccessStories"
import BookingPage from "./pages/BookingPage"
import ContactPage from "./pages/ContactPage"




function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

           <Route path="/methods" element={<Methods />} />
           
           <Route path="/conditions" element={<Condition />} />

         <Route path="/success-stories" element={<SuccessStories />} />
 
          <Route path="/book" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
{/*   
          <Route path="/videos" element={<Videos />} /> */}

        </Route>

      </Routes>

    </BrowserRouter>

  )
}

export default App