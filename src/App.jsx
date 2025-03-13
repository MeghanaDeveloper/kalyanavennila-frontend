import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/homePage/Home'
import ProfilePage from './pages/profile/profilePage'


function App() {

  return (
    <>
       <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
