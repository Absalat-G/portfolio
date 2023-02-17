import React from 'react'
const Aboutme = [{key:"1",
title:'About',
description:'I am a Full Stack Developer.I have Bsc degree on electrical and computer engineering with focus area of computer stream.  I have some relevant experience in the field in terms of internship. Background in HTML, PHP, CSS(Ant design,Tailwind, Material UI), JavaScript,React js and WordPress website development who can take multiple responsibilities with competence. As well as Strong planning and organizational skills.'}]
const About = () => {
  return (
    <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
  direction="row"
  justifyContent="center"
  className='h-screen max-w-full py-9 text-white font-bold text-3xl object-cover'>
       
  <Grid  item xs={2} sm={4} md={4}  >
 
 

   

    
   
  </Grid>
  
  <Grid item xs={2} sm={4} md={4} classname='bg-nature-color rounded-2xl' >
  {Aboutme.description}
  </Grid>
  
</Grid>


    </div>
  )
}

export default About