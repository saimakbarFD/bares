import { useEffect, useState } from "react";
import "./assets/css/App.css";
import "./assets/css/responsive.css";
import Index from "./components/main";
import LoadingScreen from "./components/main/loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return loading ? <LoadingScreen /> : <Index />;
}

export default App;
