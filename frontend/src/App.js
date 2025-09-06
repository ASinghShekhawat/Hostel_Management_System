import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../frontend/src/Components/Footer/Footer";
import Header from "../../frontend/src/Components/Header/Header";
import Homepage from "../../frontend/src/Pages/Homepage/Homepage";
import HostelDetails from "../../frontend/src/Pages/HostelDetails/HostelDetails";
import HostelRules from "../../frontend/src/Pages/HostelRules/HostelRules";
import People from "../../frontend/src/Pages/People/People";
import SignInPage from "../../frontend/src/Pages/SignInPage/SignInPage";
import Account from "../../frontend/src/Pages/StudentDashboard/Account";
import FAQs from "../../frontend/src/Pages/StudentDashboard/FAQs";
import HelpDesk from "../../frontend/src/Pages/StudentDashboard/HelpDesk";
import HostelForm from "../../frontend/src/Pages/StudentDashboard/HostelForm";
import MessAndLodging from "../../frontend/src/Pages/StudentDashboard/MessAndLodging";
import PreviouslyRaisedQueries from "../../frontend/src/Pages/StudentDashboard/PreviouslyRaisedQueries";
import StudentDashboard from "../../frontend/src/Pages/StudentDashboard/StudentDashboard";
import "./Stylings.css";

import { ToastContainer } from "react-toastify";
import AdministrationAccount from "../../frontend/src/Pages/AdministrationDashboard/AdministrationAccount";
import AdministrationDashboard from "../../frontend/src/Pages/AdministrationDashboard/AdministrationDashboard";
import AdministrationFaqs from "../../frontend/src/Pages/AdministrationDashboard/AdministrationFaqs";
import AdministrationHelpDesk from "../../frontend/src/Pages/AdministrationDashboard/AdministrationHelpDesk";
import AdministrationHostelForm from "../../frontend/src/Pages/AdministrationDashboard/AdministrationHostelForm";
import AdministrationMessAndLodging from "../../frontend/src/Pages/AdministrationDashboard/AdministrationMessAndLodging";

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
      <BrowserRouter>
        <Header />
        {/* {loading && <Loader />} */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/people" element={<People />} />
          <Route path="/hostel-details" element={<HostelDetails />} />
          <Route path="/hostel-rules" element={<HostelRules />} />
          <Route path="/sign-in-page" element={<SignInPage />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/helpDesk" element={<HelpDesk />} />
          <Route path="/hostelForm" element={<HostelForm />} />
          <Route path="/messAndLodging" element={<MessAndLodging />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/previouslyRaisedQueries"
            element={<PreviouslyRaisedQueries />}
          />

          <Route
            path="/administratorDashboard"
            element={<AdministrationDashboard />}
          />
          <Route path="/administratorFaqs" element={<AdministrationFaqs />} />
          <Route
            path="/administratorMessAndLodging"
            element={<AdministrationMessAndLodging />}
          />
          <Route
            path="/administratorAccount"
            element={<AdministrationAccount />}
          />
          <Route
            path="/administratorHostelForm"
            element={<AdministrationHostelForm />}
          />
          <Route
            path="/administratorHelpDesk"
            element={<AdministrationHelpDesk />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
