import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/homePage/Home'
import AboutPage from './pages/about/About'
import PrivateRoute from './routes/privateRoute'
import ProfilePage from './pages/profile/profilePage'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import MainPage from './components/mainPage/mainPage'
import CreateProfile from './pages/profile/createProfilePage'
import ScrollToTop from './components/common/scrollToTop'


function App() {

  return (
    <>
       <BrowserRouter> 
       <ScrollToTop/>
       <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-profile" element={<CreateProfile/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
