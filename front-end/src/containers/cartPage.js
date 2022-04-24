import { Box } from "@mui/system";
import Cart from "../components/cart";




const CartPage = ()=>{

    const styles = {
        height: '100%',
        width: '50%',
        margin: 'auto',

    }


    return (
        <Box sx={styles}>
            <Cart/>

        </Box>
    )
}




export default CartPage;