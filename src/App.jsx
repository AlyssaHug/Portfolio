import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Footer from "./components/footer/footer";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import ProjectDetailRouter from "./pages/ProjectDetailRouter.jsx";
import TopScroll from "./components/TopScroll.jsx";
import Music from "./pages/Music/Music.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <TopScroll />
                <NavBar />
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/portfolio'
                        element={<Portfolio />}
                    />
                    <Route
                        path='/portfolio/:slug'
                        element={<ProjectDetailRouter />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                    <Route
                        path='/music'
                        element={<Music />}
                    />
                    <Route
                    path='/Contact'
                    element={<Contact/>}
                    />
                    <Route
                        path='*'
                        element={<div>404 – Page not found</div>}
                    />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
