import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import '../src/styles/global.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';


function App({ Component, pageProps }) {

  const [flight, setFlight] = useState([]);
  const router = useRouter();
  const handleFlight = (data) => {
    setFlight(data);
  //  router.push({pathname:"/about", query: {id: "test"} });
  }

pageProps = {
  text: "testflight",
  flight,
  handleFlight,
};

  return(
    <div className="content">
      <img className="background" src="/images/background.svg" /> 
      <Component {...pageProps} />
  </div>
  
  )
}

export default App