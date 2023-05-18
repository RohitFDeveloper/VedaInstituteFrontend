/* eslint-disable no-unused-vars */
// Material-ui
import { Grid } from '@mui/material';

// project imports
import Carousel from './components/carousel.jsx';
import About from './components/about.jsx';

const Home = () => {
    return (
        <>
            <Grid container direction="column" alignItems="stretch" spacing={0}>
                <Grid item>
                    <Carousel />
                </Grid>
                <Grid item>
                    <About />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
