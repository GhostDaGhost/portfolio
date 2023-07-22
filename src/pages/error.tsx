import Navbar from '../components/Navbar/navbar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material';

import React from 'react';
import '../main.css';

const returnToHomeButtonStyle: object = {
    border: '1.2px solid #28acac',
    borderRadius: '1vh',
    color: 'white'
};

const dogImageAccordionStyle: object = {
    width: '80vmin',
    color: 'white',
    bgcolor: 'rgba(0, 0, 0, 0)',
    border: '1.2px solid var(--main-border-color)'
};

// ERROR PAGE COMPONENT
const Error: React.FC = () => {
    const dogImageLink: string = `${process.env.PUBLIC_URL}/assets/images/dog.png`;

    // RETURN ELEMENT
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <Typography sx={{ mt: 3, color: 'white', textAlign: 'center' }} variant="h1" component="div">
                404
            </Typography>

            <Box sx={{ mt: 2 }} display="flex" justifyContent="center">
                <Typography sx={{ width: '80%', textAlign: 'center', color: 'gray' }} variant="body1" component="div">
                    This page doesn't exist! Try one of the navigation bar buttons?
                </Typography>
            </Box>

            <Box sx={{ mt: 7 }} display="flex" justifyContent="center">
                <Button href="/" sx={returnToHomeButtonStyle}>Return Home</Button>
            </Box>

            <Box sx={{ mt: 2, mb: 3 }} display="flex" justifyContent="center">
                <Accordion sx={dogImageAccordionStyle}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                        <Typography>May I offer you this picture of a dog?</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Box display="flex" justifyContent="center">
                            <img style={{ width: '50%' }} src={dogImageLink} alt='dog' loading='lazy' draggable='false' />
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    );
}

// EXPORT ERROR PAGE COMPONENT
export default Error;
