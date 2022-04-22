import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





const Navbar = ()=>{
    return (<AppBar position='fixed' sx={{backgroundColor: "#323232"}}>
                <Toolbar sx={{height: "100%"}}>
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end',height:"100%" }}>
                        <Button  sx={{ my: 2, color: 'white', display: 'block',fontFamily: 'Roboto, sans-serif' }} href='/meals'>Menu</Button>
                        <Button sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Roboto, sans-serif' }}>Cart</Button>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: "center", justifyContent:'end',height:"10%"}}>
                    <Badge badgeContent={1} color="error">
                    <ShoppingCartIcon color="primary" />
                    </Badge>
                        <Button href='/signin'  sx={{ my: 2, color: 'white', display: 'block',fontFamily: 'Roboto, sans-serif' }}>Login</Button>
                        <Button href='/signup'  variant='contained' color='primary' sx={{height: '30px', fontFamily: 'Roboto, sans-serif'}}>Register</Button>

                    </Box>


                </Toolbar>


    </AppBar>)
}


export default Navbar;