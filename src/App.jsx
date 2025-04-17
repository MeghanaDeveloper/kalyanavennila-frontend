import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
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
import ContactUs from "./Users/pages/contact/contactUs";
import ClickTracker from "./Users/routes/clickTracking";
import PrivacyAndPolicy from "./Users/common/privacy&policies/privacyAndPolicy";
import ScrollToTop from "./Users/common/scrolltotop/scrollToTop";
import TermsAndConditions from "./Users/common/terms&conditions/terms&conditions";



function App() {
  return (
    <BrowserRouter>
    <PageTracker/>
    <ClickTracker/>
      <ScrollToTop />

      <Routes>
        <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy&policy" element={<PrivacyAndPolicy />} />
                <Route path="/terms&conditions" element={<TermsAndConditions />} />

                <Route element={<PrivateRoute />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/create-profile" element={<CreateProfile />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/contact-us" element={<ContactUs />} />
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
