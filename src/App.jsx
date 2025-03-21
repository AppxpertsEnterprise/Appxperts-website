import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Homepage />
    </>
  );
}

export default App;
