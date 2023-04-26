import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import GalleryImage from '../components/GalleryImage/galleryimage';
import { CloseExpandedImage } from '../controllers/galleryimage';

import { Typography, Button, Divider } from '@mui/material';

import React from 'react';
import '../main.css';

// SHOWCASE PAGE COMPONENT
const Showcase: React.FC = () => {
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <div className='global_centeritems'>
                <div id='main_zoomedimage_wrapper'>
                    <img id='main_zoomedimage' src='' alt='zoomed in showcase' draggable='false'/>

                    <div id='main_zoomedimage_description_wrapper'>
                        <Typography id='main_zoomedimage_description' variant="body2" component="div"></Typography>
                    </div>

                    <div className='global_centeritems'>
                        <Button id='main_zoomedimage_closebutton' variant="contained" onClick={CloseExpandedImage}>Close</Button>
                    </div>
                </div>

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
                            <GalleryImage hint='Health Triaging Menu' path='https://i.imgur.com/BT0Cu9n.png'></GalleryImage>
                        </div>

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            This menu served as a way to check injuries of yourself or other players. The left row would hold injured body parts and sort them into columns.
                            The right row would hold the injuries to the selected body part column and show on the skeleton where that body part is. The colored icons to the left
                            of the skeleton were a way to provide medications/insert IVs to heal the player or treat any negative effects on them.
                            <br></br>
                            <br></br>
                            The menu's front-end was designed with Typescript and CSS. The back-end was powered by Lua.
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Mobile Phone</Typography>
                        <Divider sx={{ mb: 3 }} color='white' />

                        <div id='gallery_images'>
                            <GalleryImage hint='Mobile Phone' path='https://i.imgur.com/MNhLszk.png'></GalleryImage>
                            <GalleryImage hint='Social Media' path='https://i.imgur.com/Ez71UaX.png'></GalleryImage>
                            <GalleryImage hint='Contacts' path='https://i.imgur.com/UEUxTeS.png'></GalleryImage>
                            <GalleryImage hint='Messages' path='https://i.imgur.com/imw4ItA.png'></GalleryImage>
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
                            <GalleryImage hint='Police Mobile Data Terminal' path='https://i.imgur.com/ut9wv44.png'></GalleryImage>
                            <GalleryImage hint='Police - Dashboard' path='https://i.imgur.com/X1e0cYB.png'></GalleryImage>
                            <GalleryImage hint='Police - Vehicle Profile' path='https://i.imgur.com/YQYqJS3.png'></GalleryImage>
                            <GalleryImage hint='Police - Firearm Profile' path='https://i.imgur.com/RIqDtzo.png'></GalleryImage>
                        </div>

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            A device that is primarily used for record searching, data recording and report creating.
                            <br></br>
                            <br></br>
                            The MDT's front-end was designed with Typescript and CSS. The back-end was powered by Lua.
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h5" component="div">Crafting Menu</Typography>
                        <Divider sx={{ mb: 3 }} color='white' />

                        <div id='gallery_images'>
                            <GalleryImage hint='Crafting Menu' path='https://i.imgur.com/AJTPdFH.png'></GalleryImage>
                            <GalleryImage hint='Crafting Menu' path='https://i.imgur.com/aTf2aev.png'></GalleryImage>
                        </div>

                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            This menu serves a way for the player to craft items with ingredients in their inventory. They had the option to craft one or three or five at a time.
                            <br></br>
                            <br></br>
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
