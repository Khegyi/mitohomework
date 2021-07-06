import React, { useEffect,useState } from 'react';
import Destination from '../src/components/Destination/Destination';
import SearchResult from '../src/components/SearchResult/SearchResult';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Flight(props) {
 // const [flight, setFlight] = useState([]);

  const router = useRouter();
  console.log(props);
/*   const handleFlight = (data) => {
    setFlight(data);
  //  router.push({pathname:"/about", query: {id: "test"} });
  } */

  useEffect(() => {

  }, [props.flight]);

    return (
        <>
          {(props.flight.length !== 0 ? 
            <SearchResult selected={props.flight} />
            :
              <Destination setflight={(t) => props.handleFlight(t)}  />
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