import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../../main.css';

import Box from '@mui/material/Box/Box';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Typography from '@mui/material/Typography/Typography';
import Slide from '@mui/material/Slide/Slide';
import Fade from '@mui/material/Fade/Fade';

const typewriterStyle: object = {
    fontSize: '26.8px',
    textAlign: 'center',
    color: 'white',
    mt: 8
};

// LOADER COMPONENT
const Loader: React.FC = () => {
    const [shouldSlideUp, setSlideUpFlag]: any = useState(false);
    const [text]: any = useTypewriter({
        words: ['Hello there :)', 'Welcome to my portfolio!'],
        loop: 1,
        typeSpeed: 85,
        deleteSpeed: 50,
        delaySpeed: 1150,
        onLoopDone: () => {
            setTimeout(() => {
                setSlideUpFlag(true);
            }, 2000);
        }
    });

    // RETURN ELEMENT
    return (
        <Fade in={true} timeout={1500}>
            <div>
                <Slide appear={false} direction="up" in={!shouldSlideUp} mountOnEnter unmountOnExit>
                    <div>
                        <Box sx={{ mt: 7.5 }} display="flex" justifyContent="center">
                            <img
                                style={{ width: '150px', animation: 'pulse 2s infinite' }}
                                src={`${process.env.PUBLIC_URL}/favicon.png`}
                                alt='favicon'
                                loading='lazy'
                                draggable='false'
                            />
                        </Box>

                        <Typography sx={typewriterStyle} variant="h4" component="div">
                            {text}
                            <Cursor cursorColor='teal'/>
                        </Typography>

                        <Box sx={{ mt: 9.55 }} display="flex" justifyContent="center">
                            <CircularProgress size={53} sx={{ color: 'teal' }}/>
                        </Box>
                    </div>
                </Slide>
            </div>
        </Fade>
    );
}

// EXPORT COMPONENT
export default Loader;
