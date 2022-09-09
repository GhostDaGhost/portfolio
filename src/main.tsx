import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './pages/about';
import PastWork from './pages/pastwork';
import Showcase from './pages/showcase';
import Error from './pages/error';

// MAIN COMPONENT
const Main: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<About/>} />
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
