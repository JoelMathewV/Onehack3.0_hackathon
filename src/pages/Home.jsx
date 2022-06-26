import React from 'react'
import '../components/home.css'
import back from "../images/climate.jpg"
import TextField from "@mui/material/TextField"
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'



function Home() {
    const [place,setPlace]= useState(" ")
    const [temp,setTemp]=useState( "");
//   var place="kerala"
      const [humi,setHumi]=useState("")
useEffect(()=>{
   weat(); 
},[]);
const weat=()=>{
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=09b78a2117cd91872406ad6a8723d983&units=metric").then((response)=>{
        console.log(response.data);
        setTemp(response.data.main.temp);
        setHumi(response.data.main.humidity);
        console.log(humi)
        console.log(temp)

       
        
    })
 }




  return (
    <div className='body'>


<TextField label="enter place" color='secondary'  autoComplete='default' variant='outlined' style={{
    left:'calc(50% - 20rem)',
    top:'100px',
  

}}  value={place}  onChange={(e)=>{setPlace(e.target.value)}} > </TextField>

<Button placeholder='Enter' variant='contained'style={{backgroundColor:'#000000',
top:'200px',
left:' calc(50% - 25rem)',
color:'red'}}  onClick={weat}>GO</Button>

<Box  
sx={{
        width: 300,
        height: 300,
        opacity:0.4,
        backgroundColor: 'wheat',
        borderRadius:'40px',
        marginTop:'13rem',
        marginLeft:'12rem',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <label>Weather update</label>
      <Typography align='center' variant='h2'>{temp+' °C'}</Typography>
</Box>
  

   

  <Box  
sx={{
        width: 300,
        height: 300,
        opacity:0.4,
        backgroundColor: 'wheat',
        borderRadius:'40px',
        marginTop:'-19rem',
        marginLeft:'60rem',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <label htmlFor="">Precautions </label>
      
</Box>
  







    </div>
  )
}

export default Home