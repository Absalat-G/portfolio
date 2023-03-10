import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
const Theme = () => {
    const[darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
    <a href='#'>
<BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl ml-10 '/>
</a>
        
    </div>
  )
}

export default Theme