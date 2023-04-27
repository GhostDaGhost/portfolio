import Navbar from '../components/Navbar/navbar';
import Experience from '../components/Experience/experience';
import Footer from '../components/Footer/footer';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { ListSubheader, Typography } from '@mui/material';

import React from 'react';
import { experiencedLanguages, experiencedTools } from '../components/Experience/data/consts';

import '../main.css';

// ABOUT COMPONENT
const About: React.FC = () => {
    return (
        <div id='main_container'>
            <Navbar></Navbar>

            <div className='global_centeritems'>
                <div id='main_inner_centeredarea'>
                    <Typography sx={{ mt: 1, mb: 2 }} variant="h4" component="div">
                        Alexander (Alex) Arizola
                    </Typography>

                    <Divider color='white'/>

                    <div className='about_page_wrapper'>
                        <Typography sx={{ mt: 1, mb: 1 }} variant="body1" component="div">
                            I'm Alex! A guy just living in a world where technology constantly evolves. I am a full stack developer with experience in various programming languages.
                            I've been in this line of work for <b>3 years</b> <span id="page_bio_years">(2019)</span>.
                            I currently own and actively develop on <a className='hyperlink' href='https://www.productionrp.net/'>ProductionRP</a>, a serious roleplay server on <a className='hyperlink' href="https://fivem.net">FiveM</a>.
                        </Typography>

                        <Typography sx={{ mt: 2, mb: 1 }} variant="body1" component="div">
                            I hold experience with issue tracking and task management. I've implemented task tracking processes using tools like trello and github issue tracking.
                            Keeping track of issues and ensuring that the correct department or developer is assigned to the relevant issues.
                        </Typography>

                        <Typography sx={{ mt: 2, mb: 1 }} variant="body1" component="div">
                            As a developer, I have experience in several languages and tools. For database systems, I utilize the 3NF approach, indexes, capable of optimizing queries using DBA tools, and able to maintain database security through the use of permissions and access control (like IP whitelisting).
                        </Typography>

                        <Typography sx={{ mt: 2, mb: 1 }} variant="body1" component="div">
                            As I used PHP, I familiarized myself with object oriented programming, laravel framework, writing and using APIs and using the blade templating engine (laravel front end bits).
                        </Typography>

                        <Typography sx={{ mt: 2, mb: 1 }} variant="body1" component="div">
                            I speak, write and understand English expertly as my first language as well as being capable of understanding and speaking Spanish.
                        </Typography>

                        <Typography sx={{ textDecoration: 'underline', mt: 2, mb: 1 }} variant="body1" component="div">
                            <b>Authorized to work in the United States for any employer.</b>
                        </Typography>
                    </div>

                    <div className='about_page_wrapper'>
                        <List sx={{ width: '100%', bgcolor: '#272c2c' }} subheader={
                            <ListSubheader component="div" sx={{ fontSize: '16.55px', color: 'white', bgcolor: '#272c2c' }}>
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

                    <div className='about_page_wrapper'>
                        <List sx={{ width: '100%', bgcolor: '#272c2c' }} subheader={
                            <ListSubheader component="div" sx={{ fontSize: '16.55px', color: 'white', bgcolor: '#272c2c' }}>
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

                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

// EXPORT ABOUT COMPONENT
export default About;
