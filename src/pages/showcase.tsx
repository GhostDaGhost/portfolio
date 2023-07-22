import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import ScrollToTop from '../components/ScrollToTop/scrolltotop';

import GalleryImage from '../components/GalleryImage/galleryimage';
import { galleryImages } from '../components/GalleryImage/data/consts';
import { Typography, Divider, Modal, Box, LinearProgress, ImageList, Fade } from '@mui/material';

import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../main.css';

const showcaseImageListStyle: object = {
    width: '90vmin',
    maxHeight: '65vmin',
    borderRadius: '.85vh',
    bgcolor: 'rgba(0, 0, 0, .25)'
};

const showcaseModalStyle: object = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'none',
    border: 'none',
    boxShadow: 24,
    outline: 0,
    p: 2
};

// SHOWCASE PAGE COMPONENT
const Showcase: React.FC = () => {
    const [showPhoneProject, setPhoneProjectVisibility]: any = useState(false);
    const [showMDTProject, setMDTProjectVisibility]: any = useState(false);

    const [openFocusedImageContainer, setFocusedImageContainerVisibility]: any = useState(false);
    const [focusedImage, setFocusedImage]: any = useState('');

    const linkTreeImageLink: string = `${process.env.PUBLIC_URL}/assets/images/linktree.png`;

    // RETURN ELEMENT
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <Modal open={openFocusedImageContainer} onClose={() => setFocusedImageContainerVisibility(false)}>
                <Box sx={showcaseModalStyle}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                            style={{ maxWidth: '100vw', height: '90vmin' }}
                            src={focusedImage}
                            alt='gallery item showcase'
                            draggable='false'
                        />
                    </Box>
                </Box>
            </Modal>

            <Fade in={true} timeout={1500}>
                <Box display="flex" justifyContent="center">
                    <div id='main_inner_centeredarea'>
                        <div className='about_page_wrapper'>
                            <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Portfolio</Typography>
                            <Divider sx={{ opacity: .33, mb: 3 }} color='white' />

                            <LinearProgress sx={{ mb: 3, color: 'teal' }} color="inherit" />

                            <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                                This website was written in <a className='hyperlink' href='https://reactjs.org/'>TypeScript React</a> and <a className='hyperlink' href='https://mui.com/'>Material UI</a> by myself and hosted through <a className='hyperlink' href='https://netlify.com/'>Netlify</a>!
                            </Typography>
                        </div>

                        <div className='about_page_wrapper'>
                            <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Link Tree</Typography>
                            <Divider sx={{ opacity: .33, mb: 1 }} color='white' />

                            <Box display="flex" justifyContent="center">
                                <ImageList sx={showcaseImageListStyle} cols={1}>
                                    <GalleryImage
                                        hint='Link Tree'
                                        path={linkTreeImageLink}
                                        // overrideWidth='80%'
                                        onImageClick={() => {
                                            setFocusedImage(linkTreeImageLink);
                                            setFocusedImageContainerVisibility(true);
                                        }}
                                    ></GalleryImage>
                                </ImageList>
                            </Box>

                            <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                                A page where all of my social media can be accessed in order to get in contact with me.
                                This website was written in <a className='hyperlink' href='https://vuejs.org/' rel="noopener noreferrer" target="_blank">Vue.js</a>, <a className='hyperlink' href='https://sass-lang.com/' rel="noopener noreferrer" target="_blank">Sass</a> and <a className='hyperlink' href='https://typescriptlang.org/' rel="noopener noreferrer" target="_blank">TypeScript</a> by myself and hosted through <a className='hyperlink' href='https://netlify.com/'>Netlify</a>!
                                You can access it <a className='hyperlink' href='https://alexarizola.info/' rel="noopener noreferrer" target="_blank">here</a>!
                            </Typography>
                        </div>

                        <div className='about_page_wrapper'>
                            <Typography sx={{ mb: 2 }} variant="h5" component="div">Triage System</Typography>
                            <Divider sx={{ opacity: .33, mb: 1 }} color='white' />

                            <Box display="flex" justifyContent="center">
                                <ImageList sx={showcaseImageListStyle} cols={3}>
                                    {galleryImages['Triage System'].map((imageData: GalleryImage) => (
                                        <GalleryImage
                                            hint={imageData['name']}
                                            path={imageData['link']}
                                            onImageClick={() => {
                                                setFocusedImage(imageData['link']);
                                                setFocusedImageContainerVisibility(true);
                                            }}
                                        ></GalleryImage>
                                    ))}
                                </ImageList>
                            </Box>

                            <Typography sx={{ mt: 1 }} variant="body1" component="div">
                                The triage system is a way for players to check the injuries of themselves or others.
                                The menu displays a skeleton in the middle of the window and the top row contains usable medications.
                                The row to the left of the skeleton is where injured bones, in the form of columns, would appear.
                                Selecting an injured bone will give you columns on the row to the right of the skeleton detailing injuries and their severities.
                            </Typography>

                            <Typography sx={{ mt: 2 }} variant="body1" component="div">
                                Once an injury is selected, the system checks if the player has the required treatment tools in their inventory and then proceeds with treatment if the checks pass.
                                This goes for the medications as well with the inventory checks.
                            </Typography>

                            <Typography sx={{ mt: 2 }} variant="body1" component="div">
                                This interface was created in <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> and <a className='hyperlink' href='https://jquery.com/'>jQuery</a> for <span style={{color: 'rgb(0, 184, 153)'}}>ProductionRP</span>, a roleplay server for the multiplayer mod <a className='hyperlink' href='https://fivem.net/'>FiveM</a>.
                            </Typography>
                        </div>

                        <VisibilitySensor partialVisibility onChange={(isVisible: boolean = false) => setPhoneProjectVisibility(isVisible)}>
                            <Fade in={showPhoneProject} timeout={950}>
                                <div className='about_page_wrapper'>
                                    <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Mobile Phone</Typography>
                                    <Divider sx={{ opacity: .33, mb: 1 }} color='white' />

                                    <Box display="flex" justifyContent="center">
                                        <ImageList sx={showcaseImageListStyle} cols={3}>
                                            {galleryImages['Mobile Phone'].map((imageData: GalleryImage) => (
                                                <GalleryImage
                                                    hint={imageData['name']}
                                                    path={imageData['link']}
                                                    onImageClick={() => {
                                                        setFocusedImage(imageData['link']);
                                                        setFocusedImageContainerVisibility(true);
                                                    }}
                                                ></GalleryImage>
                                            ))}
                                        </ImageList>
                                    </Box>

                                    <Typography sx={{ mt: 1 }} variant="body1" component="div">
                                        The mobile phone was a project created in <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> and <a className='hyperlink' href='https://jquery.com/'>jQuery</a> for <span style={{color: 'rgb(0, 184, 153)'}}>ProductionRP</span>, a roleplay server for the multiplayer mod <a className='hyperlink' href='https://fivem.net/'>FiveM</a>.
                                        The purpose of this phone is to simulate the functionalities of a real phone with the ability to call, text or email other players,
                                        manage contacts and interact with the world on social media!
                                    </Typography>

                                    <Typography sx={{ mt: 2 }} variant="body1" component="div">
                                        The phone also included the ability to take pictures and save them as well as personalizing the phone to the user's preference.
                                        This included the color of the frame, wallpaper, ringtone, text tone and email tone!
                                    </Typography>

                                    <Typography sx={{ mt: 2 }} variant="body1" component="div">
                                        The project was written in <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> and <a className='hyperlink' href='https://jquery.com/'>jQuery</a>. With <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> having the capability of having a more structured and organized codebase
                                        as well as type checking and interfaces. <a className='hyperlink' href='https://jquery.com/'>jQuery</a> was used to simplify the process of event handling and manipulation of the interface.
                                        The backend of the project involved usage of the language, <a className='hyperlink' href='https://lua.org/'>Lua</a>. <a className='hyperlink' href='https://fivem.net/'>FiveM</a> utilized <a className='hyperlink' href='https://lua.org/'>Lua</a> a lot more commonly than other languages.
                                        With the assistance of <a className='hyperlink' href='https://docs.fivem.net/natives/'>FiveM's library</a>, <a className='hyperlink' href='https://lua.org/'>Lua</a> code was written to manipulate the player model into performing animations while
                                        on the phone or texting. <a className='hyperlink' href='https://lua.org/'>Lua</a> was also used to process client to server events and callbacks.
                                    </Typography>

                                    <Typography sx={{ mt: 2 }} variant="body1" component="div">
                                        SQL queries were utilized to provide data from a <a className='hyperlink' href='https://www.mysql.com/'>database</a> to the server which would then return the query results to the client.
                                        This was essentially the brain of the phone in order to retrieve call logs, text conversations, emails and other relevant data!
                                    </Typography>
                                </div>
                            </Fade>
                        </VisibilitySensor>

                        <VisibilitySensor partialVisibility onChange={(isVisible: boolean = false) => setMDTProjectVisibility(isVisible)}>
                            <Fade in={showMDTProject} timeout={950}>
                                <div className='about_page_wrapper'>
                                    <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Mobile Data Terminal</Typography>
                                    <Divider sx={{ opacity: .33, mb: 1 }} color='white' />

                                    <Box display="flex" justifyContent="center">
                                        <ImageList sx={showcaseImageListStyle} cols={3}>
                                            {galleryImages['Mobile Data Terminal'].map((imageData: GalleryImage) => (
                                                <GalleryImage
                                                    hint={imageData['name']}
                                                    path={imageData['link']}
                                                    onImageClick={() => {
                                                        setFocusedImage(imageData['link']);
                                                        setFocusedImageContainerVisibility(true);
                                                    }}
                                                ></GalleryImage>
                                            ))}
                                        </ImageList>
                                    </Box>

                                    <Typography sx={{ mt: 1 }} variant="body1" component="div">
                                        The Mobile Data Terminal (MDT) was a project created in <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> and <a className='hyperlink' href='https://jquery.com/'>jQuery</a> for <span style={{color: 'rgb(0, 184, 153)'}}>ProductionRP</span>, a roleplay server for the multiplayer mod <a className='hyperlink' href='https://fivem.net/'>FiveM</a>.
                                        The purpose of this interface is to simulate the functionalities of a real MDT to work hand in hand with emergency services.
                                    </Typography>

                                    <Typography sx={{ mt: 2 }} variant="body1" component="div">
                                        Law enforcement players have access to a vehicles, firearms, licenses and properties database. Whilst all emergency services players have access to a persons database.
                                        Both sides also have a report writing system based on incidents they respond to in-game. The report system is designed to be near realism but also simple.
                                        The data is all saved through SQL queries to a <a className='hyperlink' href='https://www.mysql.com/'>database</a>.
                                        Having an MDT whilst providing an emergency services experience on <a className='hyperlink' href='https://fivem.net/'>FiveM</a> enhances the immersion and gameplay experience of those who utilize it.
                                    </Typography>

                                    <Typography sx={{ mt: 2 }} variant="body1" component="div">
                                        The project was written in <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> and <a className='hyperlink' href='https://jquery.com/'>jQuery</a>. With <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> having the capability of having a more structured and organized codebase
                                        as well as type checking and interfaces. <a className='hyperlink' href='https://jquery.com/'>jQuery</a> was used to simplify the process of event handling and manipulation of the interface.
                                        The backend of the project involved usage of the language, <a className='hyperlink' href='https://lua.org/'>Lua</a>. <a className='hyperlink' href='https://fivem.net/'>FiveM</a> utilized <a className='hyperlink' href='https://lua.org/'>Lua</a> a lot more commonly than other languages. <a className='hyperlink' href='https://lua.org/'>Lua</a> was used to process client to server events and callbacks.
                                    </Typography>

                                    <Typography sx={{ mt: 2 }} variant="body1" component="div">
                                        SQL queries were utilized to provide data from a <a className='hyperlink' href='https://www.mysql.com/'>database</a> to the server which would then return the query results to the client.
                                        This was essentially the brain of the MDT in order to retrieve reports, profiles and other relevant data!
                                    </Typography>
                                </div>
                            </Fade>
                        </VisibilitySensor>

                        <Divider sx={{ opacity: .33, mt: 1.75, mb: 1 }} color='white' />
                        <Footer></Footer>
                    </div>
                </Box>
            </Fade>

            <ScrollToTop/>
        </div>
    );
}

// EXPORT SHOWCASE COMPONENT
export default Showcase;
