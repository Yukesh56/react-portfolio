import Home from "./pages/Home";
import Navbar from "./pages/navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
