import { Routes, Route } from "react-router";
import Register from "./pages/Form/Register";

import "./assets/styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Form/Login";
import Home from "./pages/Home/Home";
import Filter from "./pages/Filter";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className={"App bg-transparent "}>
      <Header />
      <div id="mainContent" className="w-full">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
