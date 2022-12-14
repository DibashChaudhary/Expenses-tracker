import "./App.css";
import { Login } from "./pages/Login";
import {Routes, Route} from 'react-router-dom'
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register/>} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
      <Login />
      <ToastContainer/>
        
    </div>
  );
}

export default App;
