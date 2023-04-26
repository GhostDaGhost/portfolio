import Navbar from '../components/Navbar/navbar';

import { Button, Typography } from '@mui/material';

import React from 'react';
import '../main.css';

// ERROR PAGE COMPONENT
const Error: React.FC = () => {
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <Typography sx={{ mt: 3, mb: 5, color: 'white', textAlign: 'center' }} variant="h1" component="div">404</Typography>

            <Typography sx={{ mb: 7, color: 'white', textAlign: 'center' }} variant="h4" component="div">
                This page doesn't exist! Try one of the navigation bar buttons?
            </Typography>

            <div className='global_centeritems'>
                <Button href="/about" variant="contained">Return Home</Button>
            </div>
        </div>
    );
}

// EXPORT ERROR PAGE COMPONENT
export default Error;
