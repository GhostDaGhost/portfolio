import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';

import { Divider, Typography } from '@mui/material';

import React from 'react';

import '../main.css';

// PAST WORK COMPONENT
const PastWork: React.FC = () => {
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <div className='global_centeritems'>
                <div id='main_inner_centeredarea'>
                    <Typography sx={{ ['mt']: 1, ['mb']: 2 }} variant="h4" component="div">Past Work</Typography>
                    <Divider sx={{ ['mb']: 3 }} color='white'/>

                    <div className='about_page_wrapper'>
                        <div className='pastwork_image_wrapper'>
                            <img className='pastwork_image_elem' src='https://i.imgur.com/2pKT5rf.png' alt='prp banner' draggable='false' />
                        </div>

                        <Typography sx={{ ['mt']: 3, ['color']: 'darkgrey', ['textAlign']: 'center' }} variant="body1" component="div">2021 - Present</Typography>

                        <Typography sx={{ ['mt']: 3, ['mb']: 1 }} variant="body1" component="div">
                            I started a big project of my own which was to create a serious roleplay server on the platform of <a className='hyperlink' href='https://fivem.net/'>FiveM</a>,
                            a modification of <a className='hyperlink' href='https://www.rockstargames.com/gta-v'>Grand Theft Auto V</a>, called <span style={{['color']: 'rgb(0, 184, 153)'}}>ProductionRP</span>.
                            This project began on October 2021 some time after ending my two year involvement in the project of <span style={{['color']: 'red'}}>State of Emergency</span>.
                            <br></br>
                            <br></br>
                            I took on the full stack development for this server and created a <a className='hyperlink' href='https://www.mysql.com/'>MySQL</a> database, <a className='hyperlink' href='https://github.com/'>GitHub</a> repository, various internal scripts and user interfaces.
                            The user interfaces' back-end were created in <a className='hyperlink' href='https://lua.org/'>Lua</a> and the front-end were created in <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> / <a className='hyperlink' href='https://jquery.com/'>jQuery</a> / <a className='hyperlink' href='https://www.css3.com/'>CSS3</a> / <a className='hyperlink' href='https://html.com/'>HTML5</a>.
                            How FiveM displayed these interfaces was through a system called <a className='hyperlink' href='https://docs.fivem.net/docs/scripting-manual/nui-development/full-screen-nui/'>Fullscreen NUI</a>.
                        </Typography>
                    </div>

                    <Divider sx={{ ['mt']: 3, ['mb']: 3 }} color='white' />

                    <div className='about_page_wrapper'>
                        <div className='pastwork_image_wrapper'>
                            <img className='pastwork_image_elem' src='https://i.imgur.com/wUqrlcZ.jpg' alt='ndg banner' draggable='false' />
                        </div>

                        <Typography sx={{ ['mt']: 3, ['color']: 'darkgrey', ['textAlign']: 'center' }} variant="body1" component="div">2020 - 2020</Typography>

                        <Typography sx={{ ['mt']: 3 }} variant="body1" component="div">
                            Took on the rule of a developer in the <span style={{['color']: 'orange'}}>New Dawn Gaming</span> community which was a serious roleplay server on the platform of <a className='hyperlink' href='https://fivem.net/'>FiveM</a>, a modification of <a className='hyperlink' href='https://www.rockstargames.com/gta-v'>Grand Theft Auto V</a>.
                            I assisted in this project with bug fixes and code improvements for under a year before it shut down.
                            <br></br>
                            <br></br>
                            <span style={{['color']: 'orange'}}>New Dawn Gaming</span> utilized <a className='hyperlink' href='https://gitlab.com/'>GitLab</a> and <a className='hyperlink' href='https://git-scm.com/'>Git</a>.
                            I've created merge requests, branches, commits, issues and managed users while on this project.
                        </Typography>
                    </div>

                    <Divider sx={{ ['mt']: 3, ['mb']: 3 }} color='white' />

                    <div className='about_page_wrapper'>
                        <div className='pastwork_image_wrapper'>
                            <img className='pastwork_image_elem' src='https://i.imgur.com/Y5bvEf7.png' alt='soe banner' draggable='false' />
                        </div>

                        <Typography sx={{ ['mt']: 3, ['color']: 'darkgrey', ['textAlign']: 'center' }} variant="body1" component="div">2019 - 2021</Typography>

                        <Typography sx={{ ['mt']: 3 }} variant="body1" component="div">
                            I began my freelance development by assisting the <span style={{['color']: 'red'}}>State of Emergency</span> project which was a serious roleplay server
                            on the platform of <a className='hyperlink' href='https://fivem.net/'>FiveM</a>, a modification of <a className='hyperlink' href='https://www.rockstargames.com/gta-v'>Grand Theft Auto V</a>.
                            I assisted in this project for 2 years before it was defunct.
                            <br></br>
                            <br></br>
                            Originally, <span style={{['color']: 'red'}}>State of Emergency</span> utilized <a className='hyperlink' href='https://gitlab.com/'>GitLab</a> and <a className='hyperlink' href='https://git-scm.com/'>Git</a> whilst running on Linux servers but then moved onto <a className='hyperlink' href='https://github.com/'>GitHub</a> for a more reliable repository system. On both systems,
                            I've created merge/pull requests, branches, commits, issues and managed users.
                            <br></br>
                            <br></br>
                            From here, I assisted in vehicle modeling and full stack development. Initially, I modeled in-game vehicles by using a program called <a className='hyperlink' href='https://www.zmodeler3.com/'>zModeler 3</a>.
                            I continued doing this for about 5 months before moving onto reviewing existing code written in <a className='hyperlink' href='https://lua.org/'>Lua</a>. I reviewed by cleaning, fixing bugs and reducing redundancy/optimizing. Due to the age of this written code,
                            I lead a project in 2020 to rewrite the entire framework and successfully did so which brought many new consumers to try our server due to the new features and smoothness when it comes to FPS (Frames Per Second) and resource usage.
                        </Typography>
                    </div>

                    <Divider sx={{ ['mt']: 3, ['mb']: 3 }} color='white' />

                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

// EXPORT PAST WORK COMPONENT
export default PastWork;
