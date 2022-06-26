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
import Datee from '../components/date'



function Home() {
    const [place,setPlace]= useState(" ")
    const [temp,setTemp]=useState( "");
//   var place="kerala"
      const [humi,setHumi]=useState("");
      const [pres,setPres]=useState(" ");
      const [wind,setWind]=useState(" ")
useEffect(()=>{

   weat(); 
},[]);
const weat=()=>{
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=09b78a2117cd91872406ad6a8723d983&units=metric").then((response)=>{
        console.log(response.data);
        setTemp(response.data.main.temp);
        setHumi(response.data.main.humidity);
        setPres(response.data.main.pressure);
        setWind(response.data.wind.speed);
        console.log(humi)
        console.log(temp)
        
        
       
        
    })

    
   
   
 }

 const prec=()=>{
  if(temp > 25 || humi < 50){
      if(wind > 4){
    return(
      <div>
     <li style={{listStyle:'none'}}> Activating sprinkler system </li>
     <li style={{listStyle:'none'}}>Collecting moisture data from the fields </li>
     
     </div>

  
  )}}
  else if(temp<18 || wind >4||humi>50){
    return(
      <div>
      <label>  </label>
      <label > take shelter</label>
      </div>
    )
  }
  else if(temp>32||wind>4){
    return(
      <div>
      <li >keep hydrated ,Drink water</li>
      <li>take shelter</li>
      </div>
    )
  }
 }

 
 





  return (


<div    >


 
    <TextField label="enter place" color='primary'  autoComplete='default' variant='filled' style={{
      left:'calc(50% - 20rem)',
      top:'100px',
      backgroundColor:'silver',
      borderRadius:'10px'
  

      }}  value={place}  onChange={(e)=>{setPlace(e.target.value)}} > </TextField>

<Button placeholder='Enter' variant='contained'style={{backgroundColor:'#000000',
top:'200px',
left:' calc(50% - 25rem)',
color:'red'}}  onClick={weat}>GO</Button>
<Box sx={{
  width: 230,
        height: 150,
        opacity:0.4,
         color:'black',

        borderRadius:'40px',
        marginTop:'0.3rem',
        marginLeft:'4rem',
     

        '&:hover': {
          backgroundColor: 'white',
         
        }

}}>
<Datee></Datee>
</Box>
<Box  
sx={{
        width: 300,
        height: 300,
        opacity:0.4,
        backgroundColor: 'wheat',
        borderRadius:'40px',
        marginTop:'7rem',
        marginLeft:'12rem',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <label>Weather update</label><br></br>
      <br></br>
      <Typography align='center' variant='h2'>{temp+' °C'}</Typography>
      <Typography align='center' variant='h5'>{'Pressure :'+ pres+' Pa'}</Typography>
 <Typography align='center' variant='h5'>{'Wind : '+ wind+' km/h'}</Typography>

 <Typography align='center' variant='h5'>{'Humidity : '+ humi+' %'}</Typography>
 



   
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
     {prec()}
      
</Box>
  







    </div>
   
  )
}

export default Home