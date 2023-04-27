import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import GalleryImage from '../components/GalleryImage/galleryimage';
import { Typography, Divider, Modal, Box } from '@mui/material';

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
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Personal Website</Typography>
                        <Divider sx={{ mb: 3 }} color='white' />

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            This website was written in React by myself and hosted through Netlify!
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mb: 2 }} variant="h5" component="div">Health Triaging Menu</Typography>
                        <Divider sx={{ mb: 3 }} color='white' />

                        <div id='gallery_images'>
                            <GalleryImage
                                hint='Health Triaging Menu'
                                path='https://i.imgur.com/BT0Cu9n.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/BT0Cu9n.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>
                        </div>

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
                        <Divider sx={{ mb: 3 }} color='white' />

                        <div id='gallery_images'>
                            <GalleryImage
                                hint='Mobile Phone'
                                path='https://i.imgur.com/MNhLszk.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/MNhLszk.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>

                            <GalleryImage
                                hint='Social Media'
                                path='https://i.imgur.com/Ez71UaX.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/Ez71UaX.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>

                            <GalleryImage
                                hint='Contacts'
                                path='https://i.imgur.com/UEUxTeS.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/UEUxTeS.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>

                            <GalleryImage
                                hint='Messages'
                                path='https://i.imgur.com/imw4ItA.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/imw4ItA.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>
                        </div>

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            A device with a custom frame and no direct real-life brand resemblance. This device is used as the primary method of communication and interaction
                            for the players. It includes a camera, messaging, social media, calling, banking and more! This image shows the home page of the phone.
                            <br></br>
                            <br></br>
                            Using the same mobile phone system, a social media application was implemented that lets a user create/login to an account and begin "bleeting" which is the counterpart
                            of "tweeting" in the lore. Users were able to rebleet (retweet), like and tag other accounts.
                            <br></br>
                            <br></br>
                            The phone's front-end was designed with Typescript and CSS. The back-end was powered by Lua.
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Mobile Data Terminal</Typography>
                        <Divider sx={{ mb: 3 }} color='white' />

                        <div id='gallery_images'>
                            <GalleryImage
                                hint='Police Mobile Data Terminal'
                                path='https://i.imgur.com/ut9wv44.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/ut9wv44.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>

                            <GalleryImage
                                hint='Police - Dashboard'
                                path='https://i.imgur.com/X1e0cYB.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/X1e0cYB.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>

                            <GalleryImage
                                hint='Police - Vehicle Profile'
                                path='https://i.imgur.com/YQYqJS3.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/YQYqJS3.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>

                            <GalleryImage
                                hint='Police - Firearm Profile'
                                path='https://i.imgur.com/RIqDtzo.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/RIqDtzo.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>
                        </div>

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            A device that is primarily used for record searching, data recording and report creating.
                        </Typography>

                        <Typography sx={{ mt: 3, mb: 1 }} variant="body1" component="div">
                            The MDT's front-end was designed with Typescript and CSS. The back-end was powered by Lua.
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Crafting Menu</Typography>
                        <Divider sx={{ mb: 3 }} color='white' />

                        <div id='gallery_images'>
                            <GalleryImage
                                hint='Crafting Menu'
                                path='https://i.imgur.com/AJTPdFH.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/AJTPdFH.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>

                            <GalleryImage
                                hint='Crafting Menu'
                                path='https://i.imgur.com/aTf2aev.png'
                                onImageClick={() => {
                                    setFocusedImage('https://i.imgur.com/aTf2aev.png');
                                    setOpen(true);
                                }}
                            ></GalleryImage>
                        </div>

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            This menu serves a way for the player to craft items with ingredients in their inventory. They had the option to craft one or three or five at a time.
                        </Typography>

                        <Typography sx={{ mt: 3, mb: 1 }} variant="body1" component="div">
                            The menu's front-end was designed with Typescript and CSS. The back-end was powered by Lua.
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
