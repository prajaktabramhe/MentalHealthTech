import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mood from "./pages/Mood";
import Journal from "./pages/Journal";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;