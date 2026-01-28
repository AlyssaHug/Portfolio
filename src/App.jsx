import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Footer from "./components/footer/footer";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
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
                        path='/portfolio/:projectId'
                        element={<ProjectDetail />}
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
