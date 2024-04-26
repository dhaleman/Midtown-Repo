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
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/child" element={<ChildInfoPage/>}></Route>
          <Route path="/schedule" element={<SchedulePage/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/:user_id/price" element={<PricePage/>}></Route>
          <Route path="/location" element={<LocationPage/>}></Route>
          <Route path="/childcare" element={<ChildPage/>}></Route>
          <Route path="/petcare" element={<PetPage/>}></Route>
          <Route path="/elderly" element={<ElderlyPage/>}></Route>
          <Route path="/feedback" element={<FeedbackPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
