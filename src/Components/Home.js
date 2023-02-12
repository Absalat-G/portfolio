import React from 'react'
import {Grid} from '@mui/material';
import Typical from 'react-typical';
const items=[
  {

    key:"1",
    title:'Hello My name is Absalat Girma',
    
  }
]

const Home = () => {
  return (
    <React.Fragment>
    
      <Grid container className='h-screen max-w-full py-9 text-white font-bold text-3xl  max-sm:text-center object-cover'>
  <Grid className='p-10 'item xs={12} md={8}>
  {items[0].title}
 
    <div className='max-sm:p-8 '>
    <h2>I'm a {' '}
    <Typical className=""
        steps={['Web Developer', 1000, 'Graphics Designer', 1000 ,'Web Designer', 1000   ]}
        loop={Infinity}
        wrapper="b"
      />
      </h2>
    <div className="py-5">
<a href="#_" className="relative inline-flex items-center no-underline justify-start py-1.5 pl-2.5 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  group-hover:text-indigo-600 text-green-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  text-white group-hover:text-green-400 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
</span>

<span className="relative w-full text-left text-xl  transition-colors duration-200 ease-in-out group-hover:text-white">Download Cv</span>
</a>

    </div>
    </div>
  </Grid>
  <Grid item xs={12} md={4} classname='' >
  <img className="h-auto max-w-md ml-auto sm:text-center " src="img/background2.jpg" alt=""/>
  </Grid>
  
</Grid>


    </React.Fragment>
  )
}

export default Home