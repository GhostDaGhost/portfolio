import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import React from 'react';

import '../../main.css';
import './navbar.css';

// NAVBAR COMPONENT
const Navbar: React.FC = () => {
    return (
        <div>
            <nav id="navbar_maincontainer">
                {/* <div className='left'>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button href="/about" style={{['borderColor']: "#28acac", ['color']: 'white'}}>About</Button>
                        <Button href="/pastwork" style={{['borderColor']: "#28acac", ['color']: 'white'}}>Past Work</Button>
                        <Button href="/showcase" style={{['borderColor']: "#28acac", ['color']: 'white'}}>Showcase</Button>
                    </ButtonGroup>
                </div> */}

                {/* <div className='right'> */}
                    <a className="navbar_button navbar_icon" href="https://github.com/GhostDaGhost/"><GitHubIcon></GitHubIcon></a>
                    <a className="navbar_button navbar_icon" href="https://www.instagram.com/alex.arizola/"><InstagramIcon></InstagramIcon></a>
                    <a className="navbar_button navbar_icon" href="https://twitter.com/GhostDaGhost/"><TwitterIcon></TwitterIcon></a>
                    <a className="navbar_button navbar_icon" href="https://www.linkedin.com/in/alexander-arizola-59a644242/"><LinkedInIcon></LinkedInIcon></a>
                {/* </div> */}
            </nav>

            <div className='global_centeritems'>
                <ButtonGroup sx={{ ['mt']: 3, ['mb']: 1 }} variant="outlined" aria-label="outlined button group">
                    <Button href="/about" style={{['borderColor']: "#28acac", ['color']: 'white'}}>About</Button>
                    <Button href="/pastwork" style={{['borderColor']: "#28acac", ['color']: 'white'}}>Past Work</Button>
                    <Button href="/showcase" style={{['borderColor']: "#28acac", ['color']: 'white'}}>Showcase</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

// EXPORT NAVBAR COMPONENT
export default Navbar;
