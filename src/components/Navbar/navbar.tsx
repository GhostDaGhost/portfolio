import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade/Fade';

import Box from '@mui/material/Box/Box';
import Slide from '@mui/material/Slide/Slide';
import Link from '@mui/material/Link/Link';

import React from 'react';
import { socialMediaLinks } from './data/consts';

import '../../main.css';
import './navbar.css';

const navbarButtonStyle: object = {
    borderColor: '#28acac',
    color: 'white'
};

const navbarIcons: any = {
    'GitHub': <GitHubIcon/>,
    'Instagram': <InstagramIcon/>,
    'Twitter': <TwitterIcon/>,
    'LinkedIn': <LinkedInIcon/>,
    'Email': <EmailIcon/>
};

const navbarIconStyle: object = {
    fontSize: '23px',
    ml: '10px',
    mr: '15px',
    letterSpacing: '.85px',
    cursor: 'pointer',
    color: 'white',
    transition: '.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.2)',
        color: '#24f8f8'
    }
};

// NAVBAR COMPONENT
const Navbar: React.FC = () => {
    return (
        <div>
            <Slide direction="down" in={true} timeout={1050} mountOnEnter unmountOnExit>
                <nav id="navbar_maincontainer">
                    {socialMediaLinks.map((socialLink: any = {}) => (
                        <Link sx={navbarIconStyle} href={socialLink['link']} rel="noopener noreferrer" target="_blank">
                            {(navbarIcons[socialLink['name']])}
                        </Link>
                    ))}

                    <Link sx={navbarIconStyle} href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} rel="noopener noreferrer" target="_blank">
                        <ArticleIcon/>
                    </Link>
                </nav>
            </Slide>

            <Fade in={true} timeout={500}>
                <Box display="flex" justifyContent="center">
                    <ButtonGroup sx={{ mt: 3, mb: 1 }} variant="outlined" aria-label="outlined button group">
                        <Button href="/about" style={navbarButtonStyle}>About</Button>
                        <Button href="/pastwork" style={navbarButtonStyle}>Past Work</Button>
                        <Button href="/showcase" style={navbarButtonStyle}>Showcase</Button>
                    </ButtonGroup>
                </Box>
            </Fade>
        </div>
    );
}

// EXPORT NAVBAR COMPONENT
export default Navbar;
