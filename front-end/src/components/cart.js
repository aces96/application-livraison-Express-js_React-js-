import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import img from '../images/img2.jpg'
import { Paper } from "@mui/material";
import ButtonGrp from "./buttonGroup";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import BasicModal from "./modal";
import { useDispatch } from "react-redux";
import {update}  from '../redux/slices/modalSlice';





const Cart = (props)=>{

    let [total, setTotal] = useState(0)
    const dispatch = useDispatch()

    const styles = {
        height: '100%',
        margin: 'auto',
        marginTop: 'auto' 
    }
    let meals = localStorage.getItem(JSON.stringify('repas'))
    let data = JSON.parse(meals)
    let totl = localStorage.getItem('total')

    const handleSubmit = ()=>{
        dispatch(update(true))
        console.log('here');
        data.map( async e=>{
            setTotal(total= total + e.price * e.quantity)
        })
        localStorage.setItem('total', JSON.stringify(total))
        setTotal(0)
    }



    useEffect(()=>{
        localStorage.removeItem('total')


    }, [])
    let open = useSelector(state=>state.modalReducer.open)
    return (
        <Paper sx={styles}>
            <Box sx={{height: '80px', width: '90%', margin: 'auto', borderBottom: '1px solid black'}}>
                <h1 style={{fontFamily: 'Oswald, sans-serif'}}>CART</h1>
            </Box>

            {data.map(e => {


                return(
                    <Box boxShadow={12} sx={{height: '150%', width: '100%', margin: 'auto',borderBottom: '1px solid black', display: 'flex', marginBottom: '5px'}}>
                        <Box boxShadow={12} sx={{height: '100px', width: '20%'}}>
                                <img style={{height: '100%', width: '100%', objectFill: 'fill'}} src={e.image}/>
                        </Box>
                        <Box boxShadow={12} sx={{height: '100px', width: '45%'}}>
                            <h2 style={{fontFamily: 'Oswald, sans-serif', textAlign: 'center'}}>{e.name}</h2>
                            <h5 style={{fontFamily: 'Oswald, sans-serif', textAlign: 'center'}}>{e.description}</h5>
                        </Box>

                        <Box boxShadow={12} sx={{height: '100px', width: '15%', display:'flex',alignItems: 'center',  justifyContent: 'center'}}>
                            <ButtonGrp name={e.name} quantity={e.quantity}/>
                        </Box>

                        <Box boxShadow={12} sx={{height: '100px', width: '20%',display:'flex',alignItems: 'center',  justifyContent: 'center'}}>
                                <h2 style={{fontFamily: 'Oswald, sans-serif', textAlign: 'center'}}>{e.price * e.quantity}DH</h2>
                        </Box>
                    </Box>
                )
            })}
                    <Box boxShadow={12} sx={{height: '50px', width: '100%', margin: 'auto', display:'flex', alignItems: 'center', justifyContent: 'end'}}>
                        <Button onClick={()=>handleSubmit()} sx={{width: '20%'}} color="success" variant="contained">Submit</Button>
                    </Box>
                    <BasicModal total= {totl}/>
        </Paper>


                
    )
}


export default Cart ;