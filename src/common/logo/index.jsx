/* eslint-disable react/prop-types */
// material-ui
import logo from 'assets/images/logo.png';
// eslint-disable-next-line no-unused-vars
import { Stack, Typography } from '@mui/material';

// ==============================|| LOGO ||============================== //

const Logo = (props) => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center">
            <img src={logo} alt="Berry" width={props.width} height={props.height} />
            {/* <Typography variant="h2" ml={2} sx={{ color: '#00a499' }}>
                Nabh DLM
            </Typography> */}
        </Stack>
    );
};

export default Logo;
