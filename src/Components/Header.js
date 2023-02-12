import { useState } from 'react';
import {  Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import MobileDrawer from './MobileDrawer';
export const Navbar = [
  {
      key: '1',
  Title: "Home"
},
  {
      key: '2',
  Title: "About"
},
  {
      key: '3',
  Title: "Contact"
}
 
]
const Header= () => {
  const [value ,setValue] = useState(0);
  return (
    <React.Fragment> 

<div className='sm:flex justify-end  '>
  <Typography className='font-cookie flex justify-start text-4xl text-white pl-4' >
Absalat
  </Typography>

  <Tabs value={value} 

  onChange={ (e, value)=> setValue(value)}
  textColor="secondary"
  indicatorColor = "secondary"
  className="ml-auto max-sm:hidden ">
{
Navbar.map((data)=> {
  return(
    
  <Tab  className=" text-white  font-black"label={data.Title} />
  )
})}
       
        
       
      </Tabs>
      </div>
      <MobileDrawer/>
 

    </React.Fragment>
  )
}

export default Header