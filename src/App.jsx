import { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Home';
import D2csolutions from './pages/D2csolutions';
import Halloffame from './pages/Halloffame';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PageNotFound from './pages/PageNotFound';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SideNavbar from './components/SideNavbar/SideNavbar';
// import NewsModal from './components/NewsModal/NewsModal';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// export const ModalContext = createContext();

function App() {
  // const [openModal, setOpenModal] = useState(false);
  // const [modalData, setModalData] = useState({});

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <SideNavbar />
        <Header>
          <Navigation />
        </Header>
        {/* <ModalContext.Provider
          value={{
            openModal: setOpenModal,
            setModalData,
          }}
        > */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/d2csolutions" element={<D2csolutions />} />
          <Route path="/halloffame" element={<Halloffame />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* </ModalContext.Provider> */}
        <Footer />
      </HashRouter>
      {/* {openModal && (
        <NewsModal closeModal={setOpenModal} newsInfo={modalData} />
      )} */}
    </>
  );
}

export default App;
