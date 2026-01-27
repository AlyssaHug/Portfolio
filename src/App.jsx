import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Footer from "./components/footer/footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Link to='/Portfolio'>Portfolio</Link>
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
                        path='/Portfolio'
                        element={<Portfolio />}
                    />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
