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
                            const scrollPosition: number = window['pageYOffset'];

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
                    <Typography sx={{ ['mt']: 1, ['mb']: 2 }} variant="h4" component="div">
                        Alexander (Alex) Arizola
                    </Typography>

                    <Divider color='white'/>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ ['mt']: 1, ['mb']: 1 }} variant="body1" component="div">
                            I'm Alex! A guy just living in a world where technology constantly evolves. I am a full stack developer with experience in various programming languages.
                            I've been in this line of work for <b>3 years</b> <span id="page_bio_years">(2019)</span>.
                            I currently own and actively develop on <a className='hyperlink' href='https://www.productionrp.net/'>ProductionRP</a>, a serious roleplay server on <a className='hyperlink' href="https://fivem.net">FiveM</a>.
                        </Typography>

                        <Typography sx={{ ['mt']: 2, ['mb']: 1 }} variant="body1" component="div">
                            I hold experience with issue tracking and task management. I've implemented task tracking processes using tools like trello and github issue tracking.
                            Keeping track of issues and ensuring that the correct department or developer is assigned to the relevant issues.
                        </Typography>

                        <Typography sx={{ ['mt']: 2, ['mb']: 1 }} variant="body1" component="div">
                            As a developer, I have experience in several languages and tools. For database systems, I utilize the 3NF approach, indexes, capable of optimizing queries using DBA tools, and able to maintain database security through the use of permissions and access control (like IP whitelisting).
                        </Typography>

                        <Typography sx={{ ['mt']: 2, ['mb']: 1 }} variant="body1" component="div">
                            As I used PHP, I familiarized myself with object oriented programming, laravel framework, writing and using APIs and using the blade templating engine (laravel front end bits).
                        </Typography>

                        <Typography sx={{ ['mt']: 2, ['mb']: 1 }} variant="body1" component="div">
                            I speak, write and understand English expertly as my first language as well as being capable of understanding and speaking Spanish.
                        </Typography>

                        <Typography sx={{ ['textDecoration']: 'underline', ['mt']: 2, ['mb']: 1 }} variant="body1" component="div">
                            <b>Authorized to work in the United States for any employer.</b>
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <List sx={{['width']: '100%', ['bgcolor']: '#272c2c'}} subheader={
                            <ListSubheader component="div" sx={{['fontSize']: '16.55px', ['color']: 'white', ['bgcolor']: '#272c2c'}}>
                                Language experiences
                            </ListSubheader>
                        }>
                            <Experience name='Lua' time='3 years' linkURL='https://lua.org/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original-wordmark.svg'></Experience>
                            <Experience name='HTML5' time='3 years' linkURL='https://html.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'></Experience>
                            <Experience name='Cascading Style Sheets (CSS)' time='3 years' linkURL='https://www.css3.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'></Experience>
                            <Experience name='TypeScript' time='3 years' linkURL='https://www.typescriptlang.org/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'></Experience>
                            <Experience name='JavaScript' time='3 years' linkURL='https://www.javascript.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'></Experience>
                            <Experience name='jQuery' time='3 years' linkURL='https://jquery.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg'></Experience>
                            <Experience name='MySQL' time='2 years' linkURL='https://www.mysql.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'></Experience>
                            <Experience name='PHP' time='Under a year' linkURL='https://www.php.net/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'></Experience>
                            <Experience name='React' time='Under a year' linkURL='https://www.reactjs.org/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'></Experience>
                            <Experience name='Material UI' time='Under a year' linkURL='https://mui.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg'></Experience>
                        </List>
                    </div>

                    <div className='about_page_wrapper'>
                        <List sx={{['width']: '100%', ['bgcolor']: '#272c2c'}} subheader={
                            <ListSubheader component="div" sx={{['fontSize']: '16.55px', ['color']: 'white', ['bgcolor']: '#272c2c'}}>
                                Tool experiences
                            </ListSubheader>
                        }>
                            <Experience name='Visual Studio Code' time='3 years' linkURL='https://code.visualstudio.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'></Experience>
                            <Experience name='Markdown' time='3 years' linkURL='https://daringfireball.net/projects/markdown/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg'></Experience>
                            <Experience name='GitHub' time='3 years' linkURL='https://github.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'></Experience>
                            <Experience name='GitLab' time='2 years' linkURL='https://about.gitlab.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'></Experience>
                            <Experience name='Git' time='1 year' linkURL='https://git-scm.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'></Experience>
                            <Experience name='NPM' time='1 year' linkURL='https://www.npmjs.com/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'></Experience>
                            <Experience name='zModeler 3' time='1 year' linkURL='https://www.zmodeler3.com/' avatarLinkURL='https://i.imgur.com/lqySBYp.png'></Experience>
                            <Experience name='Atom' time='Under a year' linkURL='https://atom.io/' avatarLinkURL='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg'></Experience>
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
