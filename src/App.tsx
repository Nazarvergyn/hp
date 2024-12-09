import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500, 
    });
  }, []);
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
