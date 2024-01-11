import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full">
      <div className="fixed w-full z-20">
        <NavBar/>
      </div>
      <div className="h-20"></div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <div className="w-full z-20">
        <Footer/>
      </div>
    </div>

  );
}

export default App;
