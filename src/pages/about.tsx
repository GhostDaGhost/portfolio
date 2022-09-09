import Navbar from '../components/Navbar/navbar';
import GalleryImage from '../components/GalleryImage/galleryimage';
import Experience from '../components/Experience/experience';
import Footer from '../components/Footer/footer';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { Button, ListSubheader, Typography } from '@mui/material';

import React from 'react';
import '../main.css';

// ABOUT COMPONENT
const About: React.FC = () => {
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <div className='global_centeritems'>
                <div id='main_zoomedimage_wrapper'>
                    <img id='main_zoomedimage' src='' alt='zoomed in image' draggable='false'/>

                    <div id='main_zoomedimage_description_wrapper'>
                        <Typography id='main_zoomedimage_description' variant="body2" component="div"></Typography>
                    </div>

                    <div className='global_centeritems'>
                        <Button id='main_zoomedimage_closebutton' variant="contained" onClick={() => {
                            const zoomedImageContainer: any = document.getElementById('main_zoomedimage_wrapper');
                            const zoomedImageElem: any = document.getElementById('main_zoomedimage');

                            const zoomedImageDescription: any = document.getElementById('main_zoomedimage_description');
                            const mainBackgroundContainer: any = document.getElementById('main_inner_centeredarea');
                            const scrollPosition: any = window['pageYOffset'];

                            zoomedImageContainer['style']['opacity'] = 0;
                            setTimeout(() => {
                                zoomedImageElem['src'] = '';
                                zoomedImageDescription['innerHTML'] = ''

                                mainBackgroundContainer['style']['opacity'] = 1;
                                window.scrollTo(0, scrollPosition);
                            }, 500);
                        }}>Close</Button>
                    </div>
                </div>

                <div id='main_inner_centeredarea'>
                    <Typography sx={{ ['mt']: 1, ['mb']: 2 }} variant="h4" component="div">Alex Arizola</Typography>
                    <Divider color='white'/>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ ['mt']: 1, ['mb']: 1 }} variant="body1" component="div">
                            For <strong>3 years</strong> <span id="page_bio_years">(2019)</span>, I've been in the area of development for several networks.
                            I have lead projects, utilized many languages and love to learn. I am a full stack developer who has experience that includes
                            UI/UX projects and database management. I've lead two big projects so far with a strong team in each project to provide a satisfactory experience to our consumers.
                            At the beginning of my freelance career, I was experimenting with GTA V vehicle modeling utilizing zModeler 3. My project leader needed extra eyes and help
                            with a LUA script and thus began my curiosity for code languages which I've never stopped doing and learning since.
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <List sx={{['width']: '100%', ['bgcolor']: '#272c2c'}} subheader={
                            <ListSubheader component="div" sx={{['fontSize']: '16.55px', ['color']: 'white', ['bgcolor']: '#272c2c'}}>
                                Language experiences
                            </ListSubheader>
                        }>
                            <Experience name='LUA' time='2.5 years' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original-wordmark.svg'></Experience>
                            <Experience name='HTML' time='2 years' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'></Experience>
                            <Experience name='Cascading Style Sheets (CSS)' time='2 years' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'></Experience>
                            <Experience name='TypeScript' time='2 years' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'></Experience>
                            <Experience name='JavaScript' time='2 years' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'></Experience>
                            <Experience name='jQuery' time='2 years' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg'></Experience>
                            <Experience name='MySQL' time='1 year' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'></Experience>
                            <Experience name='PHP' time='Under a year' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'></Experience>
                            <Experience name='React' time='Under a year' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'></Experience>
                        </List>
                    </div>

                    <div className='about_page_wrapper'>
                        <List sx={{['width']: '100%', ['bgcolor']: '#272c2c'}} subheader={
                            <ListSubheader component="div" sx={{['fontSize']: '16.55px', ['color']: 'white', ['bgcolor']: '#272c2c'}}>
                                Tool experiences
                            </ListSubheader>
                        }>
                            <Experience name='GitHub' time='2 years' linkURL='https://github.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'></Experience>
                            <Experience name='GitLab' time='2 years' linkURL='https://about.gitlab.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'></Experience>
                            <Experience name='Visual Studio Code' time='2 years' linkURL='https://code.visualstudio.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'></Experience>
                            <Experience name='zModeler 3' time='1 year' linkURL='https://www.zmodeler3.com/' avatarLinkURL='https://i.imgur.com/lqySBYp.png'></Experience>
                        </List>
                    </div>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ ['mt']: 1, ['mb']: 2 }} variant="h5" component="div">Work Gallery</Typography>
                        <Divider sx={{ ['mt']: 1, ['mb']: 2 }} color='white'/>

                        <div id='gallery_images'>
                            <GalleryImage hint='Health Triaging Menu' path='https://i.imgur.com/BT0Cu9n.png'></GalleryImage>
                            <GalleryImage hint='Mobile Phone' path='https://i.imgur.com/MNhLszk.png'></GalleryImage>
                            <GalleryImage hint='Mobile Phone - Social Media' path='https://i.imgur.com/Ez71UaX.png'></GalleryImage>
                            <GalleryImage hint='Police Mobile Data Terminal' path='https://i.imgur.com/ut9wv44.png'></GalleryImage>
                            <GalleryImage hint='Crafting Menu' path='https://i.imgur.com/AJTPdFH.png'></GalleryImage>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

// EXPORT ABOUT COMPONENT
export default About;
