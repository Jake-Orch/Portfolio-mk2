import Navbar from './components/Navbar.jsx';
import { About, Contact, Portfolio, Resume } from "./pages";
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App;
