import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './pages/about';
import PastWork from './pages/pastwork';
import Showcase from './pages/showcase';
import Error from './pages/error';

import Loader from './components/Loader/loader';

// MAIN COMPONENT
const Main: React.FC = () => {
    const [loadingDOM, setLoaderVisibility]: any = useState(true);

    // LISTEN FOR LOADING SCREEN SKIP
    let loaderTimeout: any;
    document.addEventListener('skippedLoadingScreen', () => {
        clearTimeout(loaderTimeout);
        setLoaderVisibility(false);
    });

    // UPON INITIALIZATION, DISPLAY LOADER FOR X AMOUNT OF SECONDS
    useEffect(() => {
        loaderTimeout = setTimeout(() => setLoaderVisibility(false), 8750);
    }, []);

    // RETURN ELEMENT
    return (
        <Router>
            <Routes>
                <Route path='/' element={!loadingDOM ? <About/> : <Loader />}/>
                <Route path='/about' element={<About/>} />
                <Route path='/pastwork' element={<PastWork/>} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

// EXPORT MAIN COMPONENT
export default Main;
