import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import PastWorkHeader from '../components/PastWorkHeader/pastworkheader';
import ScrollToTop from '../components/ScrollToTop/scrolltotop';

import { Divider, Fade, Typography } from '@mui/material';
import Box from '@mui/system/Box/Box';

import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../main.css';

// PAST WORK COMPONENT
const PastWork: React.FC = () => {
    const [showNDG, setNDGVisibility]: any = useState(false);
    const [showSOE, setSOEVisibility]: any = useState(false);

    // RETURN ELEMENT
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <Fade in={true} timeout={1500}>
                <Box display="flex" justifyContent="center">
                    <div id='main_inner_centeredarea'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h4" component="div">Past Work</Typography>
                        <Divider sx={{ mb: 3 }} color='white'/>

                        <div className='about_page_wrapper'>
                            <PastWorkHeader imageLink='https://i.imgur.com/2pKT5rf.png' time='2021 - Present'></PastWorkHeader>

                            <Typography sx={{ mt: 3, mb: 1 }} variant="body1" component="div">
                                I started a big project of my own which was to create a serious roleplay server on the platform of <a className='hyperlink' href='https://fivem.net/'>FiveM</a>,
                                a modification of <a className='hyperlink' href='https://www.rockstargames.com/gta-v'>Grand Theft Auto V</a>, called <span style={{color: 'rgb(0, 184, 153)'}}>ProductionRP</span>.
                                This project began on October 2021 some time after ending my two year involvement in the project of <span style={{color: 'red'}}>State of Emergency</span>.
                            </Typography>

                            <Typography sx={{ mt: 3, mb: 1 }} variant="body1" component="div">
                                I was in charge of the full stack development for this server and created a <a className='hyperlink' href='https://www.mysql.com/'>MySQL</a> database, <a className='hyperlink' href='https://github.com/'>GitHub</a> repository, set up a Windows Server, various internal scripts and user interfaces.
                                The user interfaces' back-end were created in <a className='hyperlink' href='https://lua.org/'>Lua</a> and the front-end were created in <a className='hyperlink' href='https://www.typescriptlang.org/'>TypeScript</a> / <a className='hyperlink' href='https://jquery.com/'>jQuery</a> / <a className='hyperlink' href='https://www.css3.com/'>CSS3</a> / <a className='hyperlink' href='https://html.com/'>HTML5</a>.
                                How FiveM displayed these interfaces is through a system called <a className='hyperlink' href='https://docs.fivem.net/docs/scripting-manual/nui-development/full-screen-nui/'>Fullscreen NUI</a>.
                            </Typography>

                            <Typography sx={{ mt: 3, mb: 1 }} variant="body1" component="div">
                                This framework is in a constant state of development. I lead a team of 50+ staff members and take charge of issue tracking and task management.
                                My biggest achievement was reaching over 6,500+ members in the discord as well as a persistent capped population of 200+ players on our server everyday with queues of 15+ players average waiting to join.
                            </Typography>

                            <Typography sx={{ mt: 3 }} variant="body1" component="div">
                                I intend on continuously maintaining <span style={{color: 'rgb(0, 184, 153)'}}>ProductionRP</span> and growing it bigger for the <a className='hyperlink' href='https://fivem.net/'>FiveM</a> community to have a safe place to have fun and meet new people.
                            </Typography>
                        </div>

                        <Divider sx={{ mt: 3, mb: 3 }} color='white' />

                        <VisibilitySensor partialVisibility onChange={(isVisible: boolean = false) => setNDGVisibility(isVisible)}>
                            <Fade in={showNDG} timeout={950}>
                                <div className='about_page_wrapper'>
                                    <PastWorkHeader imageLink='https://i.imgur.com/wUqrlcZ.jpg' time='2020 - 2020'></PastWorkHeader>

                                    <Typography sx={{ mt: 3, mb: 1 }} variant="body1" component="div">
                                        Took on the rule of a developer in the <span style={{color: 'orange'}}>New Dawn Gaming</span> community which was a serious roleplay server on the platform of <a className='hyperlink' href='https://fivem.net/'>FiveM</a>, a modification of <a className='hyperlink' href='https://www.rockstargames.com/gta-v'>Grand Theft Auto V</a>.
                                        I assisted in this project with bug fixes and code improvements for under a year before it shut down.
                                    </Typography>

                                    <Typography sx={{ mt: 3 }} variant="body1" component="div">
                                        <span style={{color: 'orange'}}>New Dawn Gaming</span> utilized <a className='hyperlink' href='https://gitlab.com/'>GitLab</a>, <a className='hyperlink' href='https://git-scm.com/'>Git</a> and ran on a Windows Server.
                                        I've created merge requests, branches, commits, issues and managed users while on this project. The framework was ran off of <a className='hyperlink' href='https://lua.org/'>Lua</a> which I held experience in.
                                    </Typography>
                                </div>
                            </Fade>
                        </VisibilitySensor>

                        <Divider sx={{ mt: 3, mb: 3 }} color='white' />

                        <VisibilitySensor partialVisibility onChange={(isVisible: boolean = false) => setSOEVisibility(isVisible)}>
                            <Fade in={showSOE} timeout={950}>
                                <div className='about_page_wrapper'>
                                    <PastWorkHeader imageLink='https://i.imgur.com/Y5bvEf7.jpg' time='2019 - 2021'></PastWorkHeader>

                                    <Typography sx={{ mt: 3, mb: 1 }} variant="body1" component="div">
                                        I began my freelance development by assisting the <span style={{color: 'red'}}>State of Emergency</span> project which was a serious roleplay server
                                        on the platform of <a className='hyperlink' href='https://fivem.net/'>FiveM</a>, a modification of <a className='hyperlink' href='https://www.rockstargames.com/gta-v'>Grand Theft Auto V</a>.
                                        I assisted in this project for 2 years before it was defunct.
                                    </Typography>

                                    <Typography sx={{ mt: 3, mb: 1 }} variant="body1" component="div">
                                        Originally, <span style={{color: 'red'}}>State of Emergency</span> utilized <a className='hyperlink' href='https://gitlab.com/'>GitLab</a> and <a className='hyperlink' href='https://git-scm.com/'>Git</a> whilst running on Linux servers but then moved onto <a className='hyperlink' href='https://github.com/'>GitHub</a> for a more reliable repository system. On both systems,
                                        I've created merge/pull requests, branches, commits, issues and managed users.
                                    </Typography>

                                    <Typography sx={{ mt: 3 }} variant="body1" component="div">
                                        From here, I assisted in vehicle modeling and full stack development. Initially, I modeled in-game vehicles by using a program called <a className='hyperlink' href='https://www.zmodeler3.com/'>zModeler 3</a>.
                                        I continued doing this for about 5 months before moving onto reviewing existing code written in <a className='hyperlink' href='https://lua.org/'>Lua</a>. I reviewed by cleaning, fixing bugs and reducing redundancy/optimizing. Due to the age of this written code,
                                        I lead a project in 2020 to rewrite the entire framework and successfully did so which brought many new consumers to try our server due to the new features and smoothness when it comes to FPS (Frames Per Second) and resource usage.
                                    </Typography>
                                </div>
                            </Fade>
                        </VisibilitySensor>

                        <Divider sx={{ mt: 3, mb: 3 }} color='white' />

                        <Footer></Footer>
                    </div>
                </Box>
            </Fade>

            <ScrollToTop/>
        </div>
    );
}

// EXPORT PAST WORK COMPONENT
export default PastWork;
