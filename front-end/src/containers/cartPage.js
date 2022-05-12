import { Box } from "@mui/system";
import { useEffect } from "react";
import Cart from "../components/cart";




const CartPage = ()=>{

    const styles = {
        height: '100%',
        width: '40%',
        margin: 'auto',

    }
    return (
        <Box sx={styles}>
            <Cart/>

        </Box>
    )
}




export default CartPage;