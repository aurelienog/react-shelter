import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AnimalsPage from "./pages/AnimalsPage";
import CreateAnimalPage from "./pages/CreateAnimalPage";
import AnimalPage from "./pages/AnimalPage";

function App() {


  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/home?" element={<Home />}/>
        <Route path="/users/new" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/animals" element={<AnimalsPage />}/>
        <Route path="/animals/new" element={<CreateAnimalPage />}/>
        <Route path="/animals/:id" element={<AnimalPage/>}/>
        <Route path="/animals/:id/edit" element={<CreateAnimalPage />}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
