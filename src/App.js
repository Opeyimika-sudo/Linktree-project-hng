import './App.css';
// import Profile from "./components/Profile"
// import Links from "./components/Links"
// import Socials from "./components/Socials"
// import Footer from "./components/Footer"
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
