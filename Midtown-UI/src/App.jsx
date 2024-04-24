import './App.css'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ChildInfoPage from './pages/ChildInfoPage'
import SchedulePage from './pages/SchedulePage'
import AboutUs from './pages/AboutUs'
import PricePage from './pages/PricePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="/price" element={<PricePage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
