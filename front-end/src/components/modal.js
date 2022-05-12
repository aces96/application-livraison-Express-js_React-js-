import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button' 
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import {useSelector, useDispatch} from 'react-redux'
import {update}  from '../redux/slices/modalSlice';
import { useEffect, useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};



export default function BasicModal(props) {

    let [address, setAddress] = useState('')

    let open = useSelector(state=>state.modalReducer.open)
    const dispatch = useDispatch()

    const handleClose = ()=>{
        dispatch(update(false))
    }


    const handleChange = (e)=>{
        setAddress(e.target.value)
        console.log(address);


    }

    let handleSubmit = async ()=>{
        let repas = localStorage.getItem(JSON.stringify('repas'))
        let data = JSON.parse(repas)
        let orderId = 0
        console.log(data);

        const order = await axios.post('http://localhost:8000/api/order', {
            repas: data,
            address: address,
            id: 1
        }).then((res)=>{
            orderId = res.data.order.id
            console.log(orderId);
        }).catch((err)=>{
            console.log(err);
        })

        const facture = await axios.post('http://localhost:8000/api/facture/'+orderId, {
            totalPrice: props.total
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);

        })
    }
  return (
    <div>
        <Modal
            open={open}
            onClose={()=>handleClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography sx={{marginBottom: '20px'}} id="modal-modal-title" variant="h6" component="h2">
                facture total {props.total}DH
            </Typography>
            <TextField onChange={handleChange} label="Address" color="info" focused sx={{marginBottom: '20px', width: '80%'}} />
            <Typography id="modal-modal-description" sx={{ mt: 2, marginBottom: '10px'  }}>
                Submit Order !
            </Typography>
            <Button onClick={()=>handleSubmit()} sx={{width: '20%', height: '10%'}} variant='contained'>
                Submit
            </Button>
            </Box>
            
        </Modal>
    </div>
  );
}