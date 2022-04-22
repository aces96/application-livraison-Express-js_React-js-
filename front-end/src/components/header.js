import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Carousel from './imageCarousel';
import scooterImg from '../images/scooter.jpg'
import { Button } from '@mui/material';




const Header = ()=>{

    const styles = {
            height: '60%',
            width: '90%',
            background: 'rgb(255, 255, 255,0)',
            marginBottom: '1rem',
            margin: 'auto'

    }

    return (
        <Box  sx={styles}>
            <Grid container spacing={1 } sx={{height: '100%'}} justify="center" alignItems="center" direction="row">
                <Grid item xs={4}>
                        <h1 style={{fontSize: '50px' , margin: '0%', fontFamily: 'Roboto, sans-serif'}}>Fastest</h1>
                        <h1 style={{fontSize: '50px', color: '#F55353',margin: '0%',fontFamily: 'Roboto, sans-serif'}}>delivery</h1>
                        <h1 style={{fontSize: '50px',margin: '0%', color: '#6BCB77', fontFamily: 'Roboto, sans-serif'}}>&</h1>
                        <h1 style={{fontSize: '50px',margin: '0%', fontFamily: 'Roboto, sans-serif'}}>Tastiest</h1>
                        <h1 style={{fontSize: '50px', color: '#F55353',margin: '0%', fontFamily: 'Roboto, sans-serif'}}>Food</h1>

                        <Button sx={{width: '50%', height: '30%', marginTop: '2rem'}} color='error' variant="contained">Get Started</Button>
                </Grid>
                <Grid item xs={4} sx={{height: '60%'}}>
                        <Carousel />
                </Grid>
                <Grid item xs={4} sx={{height: '60%'}}>
                    <img style={{height: '100%', width: '80%'}} src={scooterImg}/>
                </Grid>
            </Grid>

        </Box>
    )
}


export default Header ;