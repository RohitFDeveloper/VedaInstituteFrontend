/* eslint-disable no-unused-vars */
import { useState } from 'react';

// bootstrap
import { Button, Modal } from 'react-bootstrap';

// project imports
import About from './components/about';
import Courses from './components/courses';
import OurExperties from './components/our-experties';
import Selections from './components/selections/selections';
import AwardAchievement from './components/awards-achievement/awards-achievement';
import Testimonials from './components/testimonials/testimonials';
import Slider from './components/slider';
import Ourfact from './components/ourfact';
import Publication from './components/publication';

const Home = () => {
    return (
        <>
            <div>
                <Slider />
            </div>
            <div>
                <About />
            </div>
            <div>
                <OurExperties />
            </div>
            <div>
                <Courses />
            </div>
            <div>
                <Selections />
            </div>
            <div>
                <AwardAchievement />
            </div>
            <div>
                <Ourfact />
            </div>
            <div>
                <Publication />
            </div>
            <div>
                <Testimonials />
            </div>
        </>
    );
};

export default Home;
