import Box from '@mui/material/Box';
import Header from '../components/header';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchBar'; 
import MealsSection from '../components/meals.section';




const Home = ()=>{

    const styles = {
        height: '100vh',
        width: '100%',
        margin: 'auto'
        
    }





    return (
        <Box className='homepage' sx={styles}>
            <Navbar/>
            <Header />
            <SearchBar/>
            <MealsSection name= 'MENU'/>

        </Box>
    )

}


export default Home ;