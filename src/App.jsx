import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import "./App.css";
import TeamsPage from "./components/TeamsPage";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ourteam" element={<TeamsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
