import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/homePage/Home'
import ProfilePage from './pages/profile/profilePage'
import About from './pages/about/About'


function App() {

  return (
    <>
       <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
