 import React, { useEffect, useState } from 'react';

import Logo from '../../../public/images/mito_logo.svg';
import Attention from '../../../public/images/attention.svg';
import DatePicker from "react-datepicker";
import Select from 'react-select'
import dayjs from 'dayjs'; 
import axios from "axios";

const Destionation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [ports, setports] = useState([]);
  const [options, setoptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOriginPort, setSelectedOriginPort] = useState([]);
  const [selectedDestinPort, setSelectedDestinPort] = useState([]);

   const GetPorts = async () => {
      try {
        const response = await axios.get('https://mock-air.herokuapp.com/asset/stations');
        console.log(response);
        const options =  response.data.map((cnt) => {
          const node = {
            value: cnt.iata,
            label: cnt.shortName,
            connections: cnt.connections,
          };
          return node;
        });
       setoptions(options);
       setports(response.data);

      } catch (error) {
        console.error(error);
      }
   }

   const SearchFlights = async () => {
    const OriginIata = selectedOriginPort.value;
    const DestinIata = selectedDestinPort.iata;
    const DepartureDate = dayjs(startDate).format('YYYY-MM-DD');
    const RetrunDate = dayjs(endDate).format('YYYY-MM-DD');

    try {

      const responsedep = await axios.get(`https://mock-air.herokuapp.com/search?departureStation=${OriginIata}&arrivalStation=${DestinIata}&date=${DepartureDate}`);
      const responseret = await axios.get(`https://mock-air.herokuapp.com/search?departureStation=${DestinIata}&arrivalStation=${OriginIata}&date=${RetrunDate}`);
      
      console.log(responsedep);
      console.log(responseret);

    } catch (error) {
      console.error(error);
    }
 }

   const HandleOriginPortSelect = (originport, e) => {

     setSelectedOriginPort(originport);

     if(originport != null){
      const connections = originport.connections.map((smt) =>  {
        const contact = ports.find((port) => {
            if(port.iata === smt.iata){
              port.value = port.iata;
              port.label = port.shortName;
              return port;
            }
          })
          return contact;
      });
  
      setFilteredOptions(connections);
   //   console.log(connections);
     }else{
      setFilteredOptions([]);
     }
    console.log(originport);
   // console.log(e);
  
  }
  
  const HandleDestinPortSelect = (destinport, e) => {

    setSelectedDestinPort(destinport);

   console.log(destinport);
  // console.log(e);
 
 }


  useEffect(() => {
    GetPorts();
  }, []);
  

    return (
    <div className="destination-box">
      <div className="destination-header">
      <Logo />
        <h2>Mito AirLine</h2> 
      </div>
      <div className="destination-content">
        <div className="flight-selection">
          <div className="flight-selection-origin input-holder">
             {/* <input placeholder="Origin" onFocus={HandleAirPortSelect} className="flight-selection-origin" type="text" /> */}
             <Select
                id="origin"
                className="basic-single"
                classNamePrefix="select"
                placeholder="Origin"
                isClearable={true}
                isSearchable={true}
                name="origin"
                options = {options}
                
                onChange={(val, e) => {
                  HandleOriginPortSelect(val, e);
                }}
              />
{/*              <select placeholder="Origin" onFocus={HandleAirPortSelect} className="flight-selection-origin" >

             </select> */}
             <div className="error-message origin"><Attention /><p>You shall not pass</p></div>
          </div>
          <div className="flight-selection-destination input-holder">
          {/*   <input placeholder="Destination" className="flight-selection-destionation" type="text" />  */}
              <Select
                  id="destination"
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Destination"
                  isClearable={true}
                  isSearchable={true}
                  name="destination"
                  options = {filteredOptions}
                  onChange={(val, e) => {
                    HandleDestinPortSelect(val, e);
                  }}
                />
            <div className="error-message destination"><Attention /><p>You shall not pass</p></div>
          </div>
        </div>
        <div className="date-selection">
          <div className="date-selection-origin input-holder">
          {/*   <input placeholder="Departure" className="date-selection-departure" type="date" /> */}
            <DatePicker
            className="date-selection-departure"
              selected={startDate}
              dateFormat="yyyy-MM-dd"
              onChange={(date) => setStartDate(date)}
              isClearable
              placeholderText="Departure"
            />
            <div className="error-message departure"><Attention /><p>You shall not pass</p></div>
          </div>
          <div className="date-selection-return input-holder">
            {/* <input placeholder="Return" className="date-selection-return" type="date" /> */}
            <DatePicker
              className="date-selection-return"
                selected={endDate}
                dateFormat="yyyy-MM-dd"
                onChange={(date) => setEndDate(date)}
                isClearable
                placeholderText="Return"
            />
            <div className="error-message return"><Attention /><p>You shall not pass</p></div>
          </div>
        </div>
        <div className="search-destination">
          <a onClick={SearchFlights} className="search-btn">Search</a>
        </div>
      </div>
    </div>
    );
  };
  
  export default Destionation;
  