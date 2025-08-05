import Home from "./pages/Home";
import Navbar from "./pages/navbar";
import About from "./pages/About";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
