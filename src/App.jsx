import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Users/components/common/scrollToTop";
import Navbar from "./Users/components/navbar/Navbar";
import MainPage from "./Users/components/mainPage/mainPage";
import AboutPage from "./Users/pages/about/About";
import PrivateRoute from "./Users/routes/privateRoute";
import Home from "./Users/pages/homePage/Home";
import ProfilePage from "./Users/pages/profile/profilePage";
import CreateProfile from "./Users/pages/profile/createProfilePage";
import Footer from "./Users/components/footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />

                <Route element={<PrivateRoute />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/create-profile" element={<CreateProfile />} />
                </Route>
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
