import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import GalleryImage from '../components/GalleryImage/galleryimage';
import { galleryImages } from '../components/GalleryImage/data/consts';
import { Typography, Divider, Modal, Box, LinearProgress } from '@mui/material';

import React, { useState } from 'react';
import '../main.css';

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
    const [open, setOpen]: any = useState(false);
    const [focusedImage, setFocusedImage]: any = useState('');

    // RETURN ELEMENT
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <Modal open={open} onClose={() => setOpen(false)}>
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

            <div className='global_centeritems'>
                <div id='main_inner_centeredarea'>
                    <div className='about_page_wrapper'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Portfolio</Typography>
                        <Divider sx={{ opacity: .33, mb: 3 }} color='white' />

                        <LinearProgress sx={{ mb: 3 }} color="inherit" />

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            This website was written in <a className='hyperlink' href='https://reactjs.org/'>TypeScript React</a> and <a className='hyperlink' href='https://mui.com/'>Material UI</a> by myself and hosted through <a className='hyperlink' href='https://netlify.com/'>Netlify</a>!
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mb: 2 }} variant="h5" component="div">Health Triaging Menu</Typography>
                        <Divider sx={{ opacity: .33, mb: 3 }} color='white' />

                        <Box sx={{ border: '1px solid rgb(95, 95, 95)' }} display="flex">
                            {galleryImages['Health Triaging Menu'].map((imageData: GalleryImage) => (
                                <GalleryImage
                                    hint={imageData['name']}
                                    path={imageData['link']}
                                    onImageClick={() => {
                                        setFocusedImage(imageData['link']);
                                        setOpen(true);
                                    }}
                                ></GalleryImage>
                            ))}
                        </Box>

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            This menu served as a way to check injuries of yourself or other players. The left row would hold injured body parts and sort them into columns.
                            The right row would hold the injuries to the selected body part column and show on the skeleton where that body part is. The colored icons to the left
                            of the skeleton were a way to provide medications/insert IVs to heal the player or treat any negative effects on them.
                        </Typography>

                        <Typography sx={{ mt: 3 }} variant="body1" component="div">
                            The menu's front-end was designed with Typescript and CSS. The back-end was powered by Lua.
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Mobile Phone</Typography>
                        <Divider sx={{ opacity: .33, mb: 3 }} color='white' />

                        <Box sx={{ border: '1px solid rgb(95, 95, 95)' }} display="flex">
                            {galleryImages['Mobile Phone'].map((imageData: GalleryImage) => (
                                <GalleryImage
                                    hint={imageData['name']}
                                    path={imageData['link']}
                                    onImageClick={() => {
                                        setFocusedImage(imageData['link']);
                                        setOpen(true);
                                    }}
                                ></GalleryImage>
                            ))}
                        </Box>

                        <Typography sx={{ mt: 2 }} variant="body1" component="div">
                            The mobile phone was a project created in TypeScript and jQuery for ProductionRP, a roleplay server for the multiplayer mod FiveM.
                            The purpose of this phone is to simulate the functionalities of a real phone with the ability to call, text or email other players,
                            manage contacts and interact with the world on social media!
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body1" component="div">
                            The phone also included the ability to take pictures and save them as well as personalizing the phone to the user's preference.
                            This included the color of the frame, wallpaper, ringtone, text tone and email tone!
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body1" component="div">
                            The project was written in TypeScript and jQuery. With TypeScript having the capability of having a more structured and organized codebase
                            as well as type checking and interfaces. jQuery was used to simplify the process of event handling and manipulation of the interface.
                            The backend of the project involved usage of the language, Lua. FiveM utilized Lua a lot more commonly than other languages.
                            With the assistance of FiveM's library, Lua code was written to manipulate the player model into performing animations while
                            on the phone or texting. Lua was also used to process client to server events and callbacks.
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body1" component="div">
                            SQL queries were utilized to provide data from a database to the server which would then return the query results to the client.
                            This was essentially the brain of the phone in order to retrieve call logs, text conversations, emails and other relevant data!
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Mobile Data Terminal</Typography>
                        <Divider sx={{ opacity: .33, mb: 3 }} color='white' />

                        <Box sx={{ border: '1px solid rgb(95, 95, 95)' }} display="flex">
                            {galleryImages['Mobile Data Terminal'].map((imageData: GalleryImage) => (
                                <GalleryImage
                                    hint={imageData['name']}
                                    path={imageData['link']}
                                    onImageClick={() => {
                                        setFocusedImage(imageData['link']);
                                        setOpen(true);
                                    }}
                                ></GalleryImage>
                            ))}
                        </Box>

                        <Typography sx={{ mt: 2 }} variant="body1" component="div">
                            The Mobile Data Terminal (MDT) was a project created in TypeScript and jQuery for ProductionRP, a roleplay server for the multiplayer mod FiveM.
                            The purpose of this interface is to simulate the functionalities of a real MDT to work hand in hand with emergency services.
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body1" component="div">
                            The project was written in TypeScript and jQuery. With TypeScript having the capability of having a more structured and organized codebase
                            as well as type checking and interfaces. jQuery was used to simplify the process of event handling and manipulation of the interface.
                            The backend of the project involved usage of the language, Lua. FiveM utilized Lua a lot more commonly than other languages.
                            Lua was used to process client to server events and callbacks.
                        </Typography>

                        <Typography sx={{ mt: 2 }} variant="body1" component="div">
                            SQL queries were utilized to provide data from a database to the server which would then return the query results to the client.
                            This was essentially the brain of the MDT in order to retrieve reports, profiles and other relevant data!
                        </Typography>
                    </div>

                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

// EXPORT SHOWCASE COMPONENT
export default Showcase;
