import Box from '@mui/material/Box';
import Navbar from '../components/navbar';
import MealsSection from '../components/meals.section';




const MealsPage = ()=>{


    return (
        <Box>
            <Navbar/>
            <MealsSection name= 'MEALS'/>

        </Box>
    )
}


export default MealsPage;