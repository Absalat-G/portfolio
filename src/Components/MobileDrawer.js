import { Drawer,IconButton,List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {Navbar} from './Header.js'

const MobileDrawer = () => {
    const [openDrawer,setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
            <List>
            { Navbar.map((data)=>{
                            return(
                <ListItemButton onClick={()=> setOpenDrawer(false)}>
                   
                           <ListItemText>
                                {data.Title}
                                </ListItemText>
                        
                   
                </ListItemButton>
                )
                             
            })}
            </List>
        </Drawer>
        <div className="absolute top-0 right-0" >
        <IconButton className=' sm:hidden text-white'onClick={()=>setOpenDrawer(!openDrawer)}>
        
<MenuIcon  />
 
        
        </IconButton>
        </div>
    </React.Fragment>
  )
}

export default MobileDrawer