import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {


  return (
    <>
      <Routes>
        <Route path="/home?" element={<Home />}/>
        <Route path="/users/new" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </>
  )
}

export default App
