import './App.css';
import Homepage from './Component/Homepage/Homepage';
import Signup from './Component/Signup/Signup';
import Signin from "./Component/Signin/Signin";
import About from "./Component/About/About";
import CarDetails from "./Component/Homepage/CarDetails/CarDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./Component/Homepage/Reviews/ReviewForm"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route exact path="/CarDetails" element={<CarDetails/>} /> */}
        <Route exact path="/CarDetails/:id" element={<CarDetails />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
