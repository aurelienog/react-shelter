import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AnimalsPage from "./pages/AnimalsPage";

function App() {


  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/home?" element={<Home />}/>
        <Route path="/users/new" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/animals" element={<AnimalsPage />}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
