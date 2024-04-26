import './App.css'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ChildInfoPage from './pages/ChildInfoPage'
import SchedulePage from './pages/SchedulePage'
import AboutUs from './pages/AboutUs'
import PricePage from './pages/PricePage'
import LocationPage from './pages/LocationPage'
import ChildPage from './pages/ChildPage'
import PetPage from './pages/PetPage'
import ElderlyPage from './pages/ElderlyPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackPage from './pages/FeedbackPage'

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/:user_id" element={<HomePage/>}></Route>
          <Route path="/:user_id/signup" element={<SignUpPage/>}></Route>
          <Route path="/:user_id/login" element={<LoginPage/>}></Route>
          <Route path="/:user_id/child" element={<ChildInfoPage/>}></Route>
          <Route path="/:user_id/schedule" element={<SchedulePage/>}></Route>
          <Route path="/:user_id/about" element={<AboutUs/>}></Route>
          <Route path="/:user_id/price" element={<PricePage/>}></Route>
          <Route path="/:user_id/location" element={<LocationPage/>}></Route>
          <Route path="/:user_id/childcare" element={<ChildPage/>}></Route>
          <Route path="/:user_id/petcare" element={<PetPage/>}></Route>
          <Route path="/:user_id/elderly" element={<ElderlyPage/>}></Route>
          <Route path="/:user_id/feedback" element={<FeedbackPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
