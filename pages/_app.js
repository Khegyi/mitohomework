import React, { useEffect,useState } from 'react';
import '../src/styles/global.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import Destination from '../src/components/Destination/Destination';
import SearchResult from '../src/components/SearchResult/SearchResult';
import BackGroundImg from '../public/images/background.svg';


export default function App() {
  const [flight, setFlight] = useState([]);

  const handleFlight = (data) => {
    setFlight(data);
  }

  useEffect(() => {

  }, [flight]);

    return (
      <div className="content">
        <img className="background" src="/images/background.svg" />
        {(flight.length !== 0 ? 
          <SearchResult selected={flight} />
        :
          <Destination setflight={(t) => handleFlight(t)}  />
        )  
        }
      </div>
   )


  }