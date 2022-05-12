import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ButtonGrp = (props)=>{


    const meals = localStorage.getItem(JSON.stringify('repas'))
    let data = JSON.parse(meals)

    const handleIncrement = ()=>{
        localStorage.removeItem('repas')

        data.map(e=>{
            if(e.name == props.name){
                e.quantity += 1

            }else console.log(props.name);

        })
        localStorage.setItem(JSON.stringify('repas'), JSON.stringify(data))
        window.location.reload()
    }

    const handleDecrement = ()=>{
        // meals.map(e=>{
        //     if(e.name == props.name){
        //         e.quantity -= 1
        //     }else console.log(props.name    );

        // })

    }

    return (
        <ButtonGroup orientation= 'vertical' size='small' variant="contained" aria-label="outlined primary button group">
            <Button onClick={()=>handleIncrement()} >+</Button>
            <Button  disabled>{props.quantity}</Button>
            <Button onClick={()=>handleDecrement()} >-</Button>
        </ButtonGroup>
    )
}

export default ButtonGrp;