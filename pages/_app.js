import React, { useEffect,useState } from 'react';
import '../src/styles/global.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';


function MyApp({ Component, pageProps }) {

  return(
    <div className="content">
      <img className="background" src="/images/background.svg" /> 
      <Component {...pageProps} />
  </div>
  
  )
}

export default MyApp