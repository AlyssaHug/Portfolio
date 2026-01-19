import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import projects from "./pages/Projects/Projects.jsx";
import Footer from "./components/footer/footer";
import Projects from "./pages/Projects/Projects.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Link to='/Projects'>Projects</Link>
                                <div className='header'>
                                    <h1>
                                        Hi! I'm Alyssa.
                                        <br />A UI/UX Designer.
                                    </h1>
                                    <p>
                                        My site is currently under construction.
                                        Working hard to have it updated soon!
                                    </p>
                                </div>
                                <div className='content'></div>
                            </>
                        }
                    />

                    <Route
                        path='/Projects'
                        element={<Projects />}
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
