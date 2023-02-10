import { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
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
<AppBar position='static'>
  <Toolbar className=" bg-gray-700">
 
  <Typography className='font-cookie text-4xl' >
Absalat
  </Typography>

  <Tabs value={value} 

  onChange={ (e, value)=> setValue(value)}
  textColor="secondary"
  indicatorColor = "secondary"
  className="ml-auto max-sm:hidden">
{
Navbar.map((data)=> {
  return(<Tab  className=" text-gray-50 font-black"label={data.Title} />)
 
})}
       
        
       
      </Tabs>
      <MobileDrawer/>
  </Toolbar>
  
  </AppBar>

    </React.Fragment>
  )
}

export default Header