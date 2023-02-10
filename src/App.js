import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
function App() {
  return (
   <div>
    <Grid>
<Header/>

  <Home/>
  </Grid>

   </div>
  );
}

export default App;
