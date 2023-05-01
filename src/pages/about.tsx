import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../main.css';

import Navbar from '../components/Navbar/navbar';
import Experience from '../components/Experience/experience';
import Footer from '../components/Footer/footer';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/system/Box/Box';

import { Fade, ListSubheader, Typography } from '@mui/material';
import { experiencedLanguages, experiencedTools } from '../components/Experience/data/consts';
import ScrollToTop from '../components/ScrollToTop/scrolltotop';

const experiencesListStyle: object = {
    width: '100%',
    bgcolor: '#272c2c'
};

const experiencesSubHeaderStyle: object = {
    fontSize: '16.55px',
    color: 'white',
    bgcolor: '#272c2c'
};

// ABOUT COMPONENT
const About: React.FC = () => {
    const [showLanguageExperiences, setLanguageExperiencesVisibility]: any = useState(false);
    const [showToolExperiences, setToolExperiencesVisibility]: any = useState(false);

    // RETURN ELEMENT
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <Fade in={true} timeout={1500}>
                <Box display="flex" justifyContent="center">
                    <div id='main_inner_centeredarea'>
                        <Typography sx={{ mt: 1, mb: 2 }} variant="h4" component="div">
                            Alexander (Alex) Arizola
                        </Typography>

                        <Divider color='white'/>

                        <div className='about_page_wrapper'>
                            <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                                I'm Alex! A guy just living in a world where technology constantly evolves. I am a full stack developer with experience in various programming languages.
                                I've been in this line of work for <b>3 years</b> <span style={{ color: 'darkgrey' }}>(2019)</span>.
                                I currently own and actively develop on <a className='hyperlink' href='https://www.productionrp.net/'>ProductionRP</a>, a serious roleplay server on <a className='hyperlink' href="https://fivem.net">FiveM</a>.
                            </Typography>

                            <Typography sx={{ mt: 2, mb: 1 }} variant="body1" component="div">
                                I hold experience with issue tracking and task management. I've implemented task tracking processes using tools like <a className='hyperlink' href='https://trello.com/'>Trello</a> and <a className='hyperlink' href='https://github.com/'>GitHub</a>/<a className='hyperlink' href='https://gitlab.com/'>GitLab</a> issue tracking.
                                Keeping track of issues and ensuring that the correct department or developer is assigned to the relevant issues.
                            </Typography>

                            <Typography sx={{ mt: 2, mb: 1 }} variant="body1" component="div">
                                As a developer, I have experience in several languages and tools. For <a className='hyperlink' href='https://mysql.com/'>database systems</a>, I utilize the 3NF approach, indexes, capable of optimizing queries using DBA tools, and able to maintain database security through the use of permissions and access control (like IP whitelisting).
                            </Typography>

                            <Typography sx={{ mt: 2, mb: 1 }} variant="body1" component="div">
                                As I used <a className='hyperlink' href='https://php.net/'>PHP</a>, I familiarized myself with object oriented programming, <a className='hyperlink' href='https://laravel.com/'>Laravel framework</a>, writing and using APIs and using the <a className='hyperlink' href='https://laravel.com/docs/10.x/blade#introduction'>Blade templating engine</a> (Laravel front end bits).
                            </Typography>

                            <Typography sx={{ mt: 2, mb: 1 }} variant="body1" component="div">
                                I speak, write and understand English expertly as my first language as well as being capable of understanding and speaking Spanish.
                            </Typography>

                            <Typography sx={{ textAlign: 'center', textDecoration: 'underline', mt: 2, mb: 1 }} variant="body1" component="div">
                                <b>Authorized to work in the United States for any employer.</b>
                            </Typography>
                        </div>

                        <VisibilitySensor partialVisibility onChange={(isVisible: boolean = false) => setLanguageExperiencesVisibility(isVisible)}>
                            <Fade in={showLanguageExperiences} timeout={950}>
                                <div className='about_page_wrapper'>
                                    <List sx={experiencesListStyle} subheader={
                                        <ListSubheader component="div" sx={experiencesSubHeaderStyle}>
                                            Language experiences
                                        </ListSubheader>
                                    }>
                                        {experiencedLanguages.map((experiencedLanguage: any = {}) => (
                                            <Experience
                                                name={experiencedLanguage['name']}
                                                time={experiencedLanguage['time']}
                                                linkURL={experiencedLanguage['linkURL']}
                                                avatarLinkURL={experiencedLanguage['avatarLinkURL']}
                                            ></Experience>
                                        ))}
                                    </List>
                                </div>
                            </Fade>
                        </VisibilitySensor>

                        <VisibilitySensor partialVisibility onChange={(isVisible: boolean = false) => setToolExperiencesVisibility(isVisible)}>
                            <Fade in={showToolExperiences} timeout={950}>
                                <div className='about_page_wrapper'>
                                    <List sx={experiencesListStyle} subheader={
                                        <ListSubheader component="div" sx={experiencesSubHeaderStyle}>
                                            Tool experiences
                                        </ListSubheader>
                                    }>
                                        {experiencedTools.map((experiencedTool: any = {}) => (
                                            <Experience
                                                name={experiencedTool['name']}
                                                time={experiencedTool['time']}
                                                linkURL={experiencedTool['linkURL']}
                                                avatarLinkURL={experiencedTool['avatarLinkURL']}
                                            ></Experience>
                                        ))}
                                    </List>
                                </div>
                            </Fade>
                        </VisibilitySensor>

                        <Footer></Footer>
                    </div>
                </Box>
            </Fade>

            <ScrollToTop/>
        </div>
    );
}

// EXPORT ABOUT COMPONENT
export default About;
