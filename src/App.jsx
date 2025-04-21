import { useEffect, useState } from "react";
import "./assets/css/App.css";
import "./assets/css/responsive.css";
import Index from "./components/main";
import LoadingScreen from "./components/main/loader";
import LandingPage from "./landingPage";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing1" element={<Index type={1} />} />
          <Route path="/landing2" element={<Index type={2} />} />
          <Route path="/landing3" element={<Index type={3} />} />
          <Route path="/landing4" element={<Index type={4} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
