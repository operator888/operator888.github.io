import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import PersonalProjects from './pages/PersonalProjects';
import VolunteerExperience from './pages/VolunteerExperience';
import TerminalLayout from './components/TerminalLayout';

import './App.css';
import './styles/global.css';
import './styles/TerminalLayout.css'; 

// Add Font Awesome icons to library
library.add(fab, fas);

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<TerminalLayout><Home /></TerminalLayout>} />
          <Route path="/about" element={<TerminalLayout><About /></TerminalLayout>} />
          <Route path="/projects" element={<TerminalLayout><Projects /></TerminalLayout>} />
          <Route path="/achievements" element={<TerminalLayout><Achievements /></TerminalLayout>} />
          <Route path="/personal-projects" element={<TerminalLayout><PersonalProjects /></TerminalLayout>} />
          <Route path="/volunteer" element={<TerminalLayout><VolunteerExperience /></TerminalLayout>} />
          <Route path="/contact" element={<TerminalLayout><Contact /></TerminalLayout>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
