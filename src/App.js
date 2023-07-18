import Navbar from './components/Navbar.jsx';
import { About, Contact, Portfolio, Resume } from "./pages";
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/Portfolio-mk2/" element={<About />} />
          <Route path="/Portfolio-mk2/contact" element={<Contact />} />
          <Route path="/Portfolio-mk2/portfolio" element={<Portfolio />} />
          <Route path="/Portfolio-mk2/resume" element={<Resume />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App;
