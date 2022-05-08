import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
