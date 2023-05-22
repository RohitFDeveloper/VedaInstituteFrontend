/* eslint-disable no-unused-vars */

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
            <div class="container ">
                <div class="row">
                    <Slider />
                </div>
                <div class="row">
                    <About />
                </div>
                <div class="row">
                    <OurExperties />
                </div>
                <div class="row">
                    <Courses />
                </div>
                <div class="row">
                    <Selections />
                </div>
                <div class="row">
                    <AwardAchievement />
                </div>
                <div class="row">
                    <Ourfact />
                </div>
                <div class="row">
                    <Publication />
                </div>
                <div class="row">
                    <Testimonials />
                </div>
            </div>
        </>
    );
};

export default Home;
