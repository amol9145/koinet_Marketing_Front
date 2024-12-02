import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./Components/Footer";
import HeadNavbar from "./Components/HeadNavbar";
import CreateReports from "./Dashboard/Createreports";
import CreatePressRelease from "./Dashboard/CreatePressRelease";
import CreateInfographics from "./Dashboard/CreateInfographics";
import { ToastContainer } from "react-toastify";
import Billing from "./View/Subpages/Billing";
import ViewPressRelease from "./View/Subpages/ViewPressRelease";

// Lazy loading components
const Home = lazy(() => import("./View/Home"));
const GDPR = lazy(() => import("./View/footer/GDPR"));
const PrivacyPolicy = lazy(() => import("./View/footer/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./View/footer/TermsAndConditions"));
const CCPA = lazy(() => import("./View/footer/CCPA"));
const Cancellation = lazy(() => import("./View/footer/Cancellation"));
const Contact = lazy(() => import("./View/footer/Contact"));
const About = lazy(() => import("./View/footer/About"));
const Career = lazy(() => import("./View/footer/Career"));
const LatestReport = lazy(() => import("./View/LatestReport"));
const AboutUs = lazy(() => import("./View/AboutUs"));
const ViewReportDetails = lazy(() => import("./View/Subpages/ViewReportDetails"));
const Pressreleased = lazy(() => import("./View/FeaturedInsigts/Pressreleased"));
const Infographics = lazy(() => import("./View/FeaturedInsigts/Infographics"));
const ViewInfographics = lazy(() => import("./View/Subpages/ViewInfographics"));
const WhoWeAre = lazy(() => import("./View/FeaturedInsigts/WhoWeAre"));
const Advisory = lazy(() => import("./View/Advisory"));
const Login = lazy(() => import("./View/Subpages/Login"));
const Allexpertise = lazy(() => import("./View/Subpages/Allexpertise"));
const CreateReport = lazy(() => import("./Dashboard/Createreports"));
const HomeDashboard = lazy(() => import("./Dashboard/HomeDashboard"));

function App() {
  return (
    <BrowserRouter>
      <HeadNavbar />
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/ccpa" element={<CCPA />} />
          <Route path="/refundpolicy" element={<Cancellation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/latest_reports" element={<LatestReport />} />
          <Route path="/allexpertise" element={<Allexpertise />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/latest_reports/viewreportdetails/:id" element={<ViewReportDetails />} />
          <Route path="/pressreleased" element={<Pressreleased />} />
          <Route path="/infographics" element={<Infographics />} />
          <Route path="/createreports" element={<CreateReport />} />
          <Route path="/infographics/viewInfographics/:id" element={<ViewInfographics />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/dashboard" element={<HomeDashboard />} />
          <Route path="/create_report" element={<CreateReports />} />
          <Route path="/create_press_release" element={<CreatePressRelease />} />
          <Route path="/createinfographics" element={<CreateInfographics />} />
          <Route path="/report_billing/:id" element={<Billing />} />
          <Route path="/view_press_release/:id" element={<ViewPressRelease />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
