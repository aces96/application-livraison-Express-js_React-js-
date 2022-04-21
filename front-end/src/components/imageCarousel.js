import { Paper, Box } from "@mui/material";
import { useState } from "react";
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import './Carousel.css'


const Carousel = ()=>{


    const [currImg, setImg] = useState(1)

    const styles = {
        height: '100%',
        width: '100%',
        border: '2px solid black'
    }

    const images = [{
        img: img1
    },{
        img: img2
    },{
        img: img3
    }]



    return (
        <Box sx={styles} boxShadow= {20}>
            <Box sx={{height: '100%', width: '100%', backgroundPosition: 'centre',display: 'flex', backgroundImage: `url(${images[currImg].img})`,  backgroundRepeat: "no-repeat",  backgroundSize: "cover",}}>
                <Box className="left"><ArrowCircleLeftOutlinedIcon color="primary" onClick= {()=>{currImg > 0 && setImg(currImg-1)}} sx={{width: '80%', height: '15%',cursor: 'pointer'}}/></Box>
                <Box className="centre"></Box>
                <Box className="right"><ArrowCircleRightOutlinedIcon color="primary" onClick= {()=>{currImg < images.length -1 && setImg(currImg+1)}} sx={{width: '80%', height: '15%' , cursor: 'pointer'}}/></Box>

            </Box>

        </Box>

    )
}


export default Carousel;