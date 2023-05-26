import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Ideas from './pages/Ideas.js';
import Resume from './pages/Resume.js';
import Articles from './pages/Articles.js';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/ideas" element={<Ideas />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/articles" element={<Articles />} />
            </Routes>
        </Router>
    );
  }
  
  export default AppRouter;
  