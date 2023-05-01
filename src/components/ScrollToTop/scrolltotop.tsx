import React, { useState } from 'react';
import '../../main.css';

import { Fab, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const scrollToTopButtonStyle: object = {
    display: 'inline',
    height: '55px',
    right: '2.75%',
    bottom: '20px',
    position: 'fixed',
    boxShadow: 'inset 0 0 3px black',
    border: '2px solid var(--main-border-color)',
    bgcolor: 'var(--main-background-color)',
    transition: 'opacity .2s ease-in-out',
    '&:hover': {
        bgcolor: '#484f4f'
    }
};

// SCROLL TO TOP COMPONENT
const ScrollToTop: React.FC = () => {
    const [isScrollToTopVisible, setScrollToTopVisible]: any = useState(false);

    // WHEN TRIGGERED, RETURN TO THE TOP OF THE PAGE
    const ReturnToTopOfPage: any = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ADD EVENT LISTENER FOR SCROLLING
    window.addEventListener('scroll', () => {
        const scrolled: number = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setScrollToTopVisible(true);
        } else if (scrolled <= 300) {
            setScrollToTopVisible(false);
        }
    });

    // RETURN ELEMENT
    return (
        <Tooltip title='Scroll To Top' placement='top' arrow>
            <Fab
                color="primary"
                onClick={ReturnToTopOfPage}
                sx={{ ...scrollToTopButtonStyle, opacity: isScrollToTopVisible ? '1' : '0' }}
            >
                <ArrowUpwardIcon sx={{ fontSize: 30 }} />
            </Fab>
        </Tooltip>
    );
}

// EXPORT COMPONENT
export default ScrollToTop;
