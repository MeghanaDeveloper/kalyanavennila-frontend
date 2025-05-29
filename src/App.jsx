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
import ContactUs from "./Users/pages/contact/contactUs";
import PrivacyAndPolicy from "./Users/common/privacy&policies/privacyAndPolicy";
import ScrollToTop from "./Users/common/scrollToTop/scrollToTop";
import TermsAndConditions from "./Users/common/terms&conditions/terms&conditions";
import FindYourMatch from "./Users/pages/matchMaking/findYourMatch";
import FullProfileDetails from "./Users/pages/matchMaking/fullProfileDetails";
import usePageTracking from "./Users/routes/pageTracking";
import UploadProfileImage from "./Users/pages/profile/createProfile/pages/uploadProfileImage";
import UploadDocuments from "./Users/pages/profile/createProfile/pages/uploadDocuments";
import CreateProfileLayout from "./Users/pages/profile/createProfile/createProfileLayout";
import PageNotFound from "./Users/routes/pageNotFound";
import LoginModal from "./Users/pages/auth/login/loginModal";
import Blogs from "./Users/pages/blogs/blogs";
import FAQS from "./Users/common/FAQ/FAQ";

function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs/how-to-write-a-perfect-matrimonial-profile" element={<Blogs />} />
        <Route path="/privacy&policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/faq's" element={<FAQS />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-profile" element={<CreateProfileLayout />}>
            <Route index element={<CreateProfile />} />
            <Route
              path="upload-profile-image"
              element={<UploadProfileImage />}
            />
            <Route path="upload-documents" element={<UploadDocuments />} />
          </Route>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/find-your-match" element={<FindYourMatch />} />
          <Route path="/find-your-match/:id" element={<FullProfileDetails />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const PageTracker = () => {
  usePageTracking();
  return null;
};

export default App;
