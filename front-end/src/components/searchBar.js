import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';



const SearchBar = ()=>{

    const styles = {
        background: "#F7F7F7",
        width: '60%',
        height: '22%',
        border: '1px solid white',
        borderRadius: '25px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
    }


    return (
        <Box className='searchBar' boxShadow={24} sx={styles}>
                <h2 style={{margin: "0%",fontFamily: 'Roboto, sans-serif', color: '#33313B'}}>FIND YOUR MEAL !</h2>
                <TextField label="Outlined secondary" color="primary" focused sx={{width: '50%', margin: 'auto', marginBottom: '10px', padding: '0%'}}/>
                <Button color='primary' variant="contained" sx={{width: '40%', margin: 'auto' }}>Search</Button>
        </Box>
    )
}



export default SearchBar;