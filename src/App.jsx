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
import Blogs from "./Users/pages/blogs/Blogs";
import usePageTracking from "./Users/routes/pageTracking";



function App() {
  return (
    <BrowserRouter>
    <PageTracker/>
      <ScrollToTop />

      <Routes>
        <Route path="/*"
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
                  <Route path="/blogs" element={<Blogs />} />
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


const PageTracker = () => {
  usePageTracking();
  return null;
};

export default App;
