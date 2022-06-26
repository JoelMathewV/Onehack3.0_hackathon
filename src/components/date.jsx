import { Typography } from '@mui/material';
import React from 'react'
import '../components/home.css'


function Datee() {
  
  var showdate= new Date();
  var displaytodaysdate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
  var displayTime=showdate.getHours()+':'+showdate.getMinutes()+" PM"

  return(
    <div className="datee">
    <Typography variant='subtitle' style={{listStyle:'none',
                fontFamily:'fantasy',
                fontSize:'50px' ,
                textShadow:'4px 3px 3px white',
                marginLeft:'0px'          
    
    
           }}>{displayTime}</Typography>
        <li  style={{listStyle:'none',
                      fontFamily:'fantasy',
                      fontSize:'20px',
                        }}type="text" readOnly='true'>
          {displaytodaysdate}
        </li>

    
    </div>
  )

}

export default Datee