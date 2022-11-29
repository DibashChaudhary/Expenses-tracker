import "./App.css";
import { Login } from "./pages/Login";
import {Routes, Route} from 'react-router-dom'
import { Register } from "./pages/Register";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register/>} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
