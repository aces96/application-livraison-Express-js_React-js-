import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import img from '../images/img2.jpg'
import { Paper } from "@mui/material";




const Cart = ()=>{

    const styles = {
        height: '100%',
        margin: 'auto',
        marginTop: 'auto' 
    

    }


    return (
        <Paper sx={styles}>
            <Box sx={{height: '80px', width: '90%', margin: 'auto', borderBottom: '1px solid black'}}>
                <h1 style={{fontFamily: 'Oswald, sans-serif'}}>CART</h1>
            </Box>

            <Box sx={{height: '100px', width: '100%',borderBottom: '1px solid black', display: 'flex', margin: '5px' }}>
                <Box sx={{height: '100%', width: '20%', border: '1px solid black'}}>
                    <img style={{height: '100%', width: '100%', objectFit: 'fill'}} src={img}/>
                </Box>
                <Box sx={{height: '100%', width: '60%', border: '1px solid black'}}>
                    <Box sx={{height: '50%', width: '100%',border: '1px solid black'}}>

                    </Box>
                    <Box sx={{height: '49x%', width: '100%', border: '1px solid black'}}>

                    </Box>

                </Box>
                <Box sx={{height: '100%', width: '20%', border: '1px solid black'}}>

                </Box>

            </Box>

            
        </Paper>
    )
}


export default Cart ;