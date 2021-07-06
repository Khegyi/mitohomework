import React, { useEffect,useState } from 'react';
import Destination from '../src/components/Destination/Destination';
import SearchResult from '../src/components/SearchResult/SearchResult';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function App() {
  const [flight, setFlight] = useState([]);

  const router = useRouter();

  const handleFlight = (data) => {
    setFlight(data);
  //  router.push({pathname:"/about", query: {id: "test"} });
  }

  useEffect(() => {

  }, [flight]);

    return (
        <>
          {(flight.length !== 0 ? 
            <SearchResult selected={flight} />
            :
              <Destination setflight={(t) => handleFlight(t)}  />
            )  
          }
           <Link href={{
             pathname:"/about",
             query: {id: "test"},
           }}>
            <a>about</a>
          </Link>
        </>
   )


  }