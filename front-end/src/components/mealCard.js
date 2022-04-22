import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../images/img1.jpg'

export default function MultiActionAreaCard() {
    return (
        <Card sx={{ width: '100%', height: '100%' }}>
        <CardMedia
          component="img"
          sx={{height:"50%"}}
          image={img}
          alt="green iguana"
        />
        <CardContent  sx={{padding: '0%', width: '100%',height: '30%'}}>
          <Typography gutterBottom variant="h5" component="div">
            MEAL
          </Typography>
          <Typography variant="body2" color="text.secondary">
            jfbksjghnlvksdkgjspdjglsd,vlskndvrhgpsjfsd,variantrgrbgkjsdjv
            irhgnvljnsdlhvlsk

          </Typography>
        </CardContent>
        <CardActions  sx={{padding: '0%', height:'20%', display: 'flex',flexDirection:'column', flex:'1', alignItems: 'start'}}>
          <Button sx={{marginTop: 'auto', height: '50%', width: '50%'}} variant='contained' size="small">ADD TO CART</Button>
        </CardActions>
      </Card>
);
}