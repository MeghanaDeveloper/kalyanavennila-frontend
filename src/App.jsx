import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Users/components/navbar/Navbar";
import MainPage from "./Users/components/mainPage/mainPage";
import AboutPage from "./Users/pages/about/About";
import PrivateRoute from "./Users/routes/privateRoute";
import Home from "./Users/pages/homePage/Home";
import ProfilePage from "./Users/pages/profile/viewProfile/profilePage";
import CreateProfile from "./Users/pages/profile/createProfile/pages/createProfilePage";
import Footer from "./Users/components/footer/Footer";
import Blogs from "./Users/pages/blogs/Blogs";
import ContactUs from "./Users/pages/contact/contactUs";
//import ClickTracker from "./Users/routes/clickTracking";
import PrivacyAndPolicy from "./Users/common/privacy&policies/privacyAndPolicy";
import ScrollToTop from "./Users/common/scrollToTop/scrollToTop";
import TermsAndConditions from "./Users/common/terms&conditions/terms&conditions";
import FindYourMatch from "./Users/pages/matchMaking/findYourMatch";
import FullProfileDetails from "./Users/pages/matchMaking/fullProfileDetails";
import usePageTracking from "./Users/routes/pageTracking";
import UploadProfileImage from "./Users/pages/profile/createProfile/pages/uploadProfileImage";
import UploadDocuments from "./Users/pages/profile/createProfile/pages/uploadDocuments";
import CreateProfileLayout from "./Users/pages/profile/createProfile/createProfileLayout";

function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      {/* <ClickTracker/> */}
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
                <Route path="/privacy&policy" element={<PrivacyAndPolicy />} />
                <Route
                  path="/terms&conditions"
                  element={<TermsAndConditions />}
                />

                <Route element={<PrivateRoute />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<ProfilePage />} />

                  <Route
                    path="/create-profile"
                    element={<CreateProfileLayout />}
                  >
                    <Route index element={<CreateProfile />} />
                    <Route
                      path="upload-profile-image"
                      element={<UploadProfileImage />}
                    />
                    <Route
                      path="upload-documents"
                      element={<UploadDocuments />}
                    />
                  </Route>

                  {/* <Route path="/blogs" element={<Blogs />} /> */}
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/find-your-match" element={<FindYourMatch />} />
                  <Route
                    path="/find-your-match/:id"
                    element={<FullProfileDetails />}
                  />
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
