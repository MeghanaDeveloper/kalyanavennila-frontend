import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/homePage/Home'
import AboutPage from './pages/about/About'
import PrivateRoute from './routes/privateRoute'
import ProfilePage from './pages/profile/profilePage'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import MainPage from './components/mainPage/mainPage'


function App() {

  return (
    <>
       <BrowserRouter> 
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoute />}>
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
