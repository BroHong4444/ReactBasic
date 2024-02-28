import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import Route404Page from "./page/Route404Page";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductPage from "./page/ProductPage";

function App() {
    return(
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/add-product' element={<ProductPage/>} />
            <Route path='*' element={<Route404Page/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
