// 
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster position="bottom-right" ></Toaster>
    </>
  );
}

export default App;

