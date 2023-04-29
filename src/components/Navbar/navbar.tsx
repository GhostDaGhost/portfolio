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

import React from 'react';

import '../../main.css';
import './navbar.css';

const navbarButtonStyle: object = {
    borderColor: '#28acac',
    color: 'white'
}

// NAVBAR COMPONENT
const Navbar: React.FC = () => {
    return (
        <div>
            <nav id="navbar_maincontainer">
                <a className="navbar_button navbar_icon" href="https://github.com/GhostDaGhost/">
                    <GitHubIcon></GitHubIcon>
                </a>

                <a className="navbar_button navbar_icon" href="https://www.instagram.com/alex.arizola/">
                    <InstagramIcon></InstagramIcon>
                </a>

                <a className="navbar_button navbar_icon" href="https://twitter.com/GhostDaGhost/">
                    <TwitterIcon></TwitterIcon>
                </a>

                <a className="navbar_button navbar_icon" href="https://www.linkedin.com/in/alexander-arizola/">
                    <LinkedInIcon></LinkedInIcon>
                </a>

                <a className="navbar_button navbar_icon" href="mailto:ghostdaghostt@gmail.com">
                    <EmailIcon></EmailIcon>
                </a>

                <a className="navbar_button navbar_icon" href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} rel="noopener noreferrer" target="_blank">
                    <ArticleIcon></ArticleIcon>
                </a>
            </nav>

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
