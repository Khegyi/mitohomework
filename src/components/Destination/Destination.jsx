 import React, { useEffect, useState } from 'react';

import Logo from '../../../public/images/mito_logo.svg';
import Attention from '../../../public/images/attention.svg';
import Calendar from '../../../public/images/calendar.svg';
import DatePicker from "react-datepicker";
import Select from 'react-select'
import dayjs from 'dayjs'; 
import axios from "axios";
import _ from 'underscore';

const Destionation = ( props ) => {

  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const [ports, setports] = useState([]);
  const [options, setoptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOriginPort, setSelectedOriginPort] = useState([]);
  const [selectedDestinPort, setSelectedDestinPort] = useState([]);

  const [errorMessages, setErrorMessages] = useState([]);

   const GetPorts = async () => {
      try {
        const response = await axios.get('https://mock-air.herokuapp.com/asset/stations');
    //    console.log(response);
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

    
    if(Validation()){

      const OriginIata = selectedOriginPort.value;
      const DestinIata = selectedDestinPort.iata;
      const DepartureDate = dayjs(departureDate).format('YYYY-MM-DD');
      let ReturnDate = null;
      if(returnDate !== null){
         ReturnDate = dayjs(returnDate).format('YYYY-MM-DD');
        }

    //  console.log(props);

      const selectedFight = {
        OriginIata: selectedOriginPort.value,
        DestinIata : selectedDestinPort.iata,
        DepartureShortName: selectedOriginPort.label,
        ArrivalShortName : selectedDestinPort.shortName,
        DepartureDate : DepartureDate,
        ReturnDate : ReturnDate,
      }

      props.setflight(selectedFight);
  
/*       try {
  
        const responsedep = await axios.get(`https://mock-air.herokuapp.com/search?departureStation=${OriginIata}&arrivalStation=${DestinIata}&date=${DepartureDate}`);
        const responseret = await axios.get(`https://mock-air.herokuapp.com/search?departureStation=${DestinIata}&arrivalStation=${OriginIata}&date=${ReturnDate}`);
        
        console.log(responsedep);
        console.log(responseret);


        
       // getflight(responsedep);
  
      } catch (error) {
        console.error(error);
      } */
    }
    else{
      console.log("nopi");

    }

 }
 const Validation = () => {
  var now = dayjs().format("YYYY-MM-DD");
  const someerror = [];

    if(selectedOriginPort.length=== 0){
     console.log("select origin");
     someerror.push({ labelname :"origin", message: "Please select origin"});
    }
    if(selectedDestinPort.length=== 0){
      console.log("select destin");
      someerror.push({ labelname :"destination", message: "Please select destination"});
    } 
    if(departureDate === null){
      console.log("select departure");
      someerror.push({ labelname :"departure", message: "Please select departure date"});
    }

    if(dayjs(departureDate).format("YYYY-MM-DD") < now){
      console.log("select departure");
      someerror.push({ labelname :"departure", message: "No timetravel!"});
    }
    if(dayjs(returnDate).format("YYYY-MM-DD") < now){
      console.log("select departure");
      someerror.push({ labelname :"return", message: "No timetravel!"});
    }

    if(dayjs(returnDate).format("YYYY-MM-DD") < dayjs(departureDate).format("YYYY-MM-DD")){
      console.log("select departure");
      someerror.push({ labelname :"return", message: "Must be after deparute date"});
    }
  //  console.error(someerror);
    setErrorMessages(someerror);
    /* if(returnDate === null) console.log("select return"); */

    if(someerror.length === 0){
      return true
    }
    return false
 }

   const HandleOriginPortSelect = (originport, e) => {

    localStorage.setItem("SelectedOriginPort", originport.value);

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
    localStorage.setItem("SelectedDestinPort", destinport.iata);

   console.log(destinport);
  // console.log(e);
 
 }

 const errorMessage = (ename) => {

//console.log(errorMessages);

let errormes = "";
  const thiserror = _.findWhere(errorMessages, {labelname: ename});
  if(thiserror != undefined){
     errormes = thiserror.message;
     return (
      <div className={`error-message ${ename}`}><Attention /><p>{errormes}</p></div>
      )
  }
 }


  useEffect(() => {
   // console.log(localStorage.getItem("SelectedOriginPort"))
   // console.log(localStorage.getItem("SelectedDestinPort"))



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
              /*  defaultValue={options[0]} */
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
             {errorMessage("origin")}
            {/*  <div className="error-message origin"><Attention /><p>You shall not pass</p></div> */}
          </div>
          <div className="flight-selection-destination input-holder">
          {/*   <input placeholder="Destination" className="flight-selection-destionation" type="text" />  */}
              <Select
                  id="destination"
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Destination"
                  defaultValue="BUD"
                  isClearable={true}
                  isSearchable={true}
                  name="destination"
                  options = {filteredOptions}
                  onChange={(val, e) => {
                    HandleDestinPortSelect(val, e);
                  }}
                />
           {errorMessage("destination")}
          </div>
        </div>
        <div className="date-selection">
          <div className="date-selection-origin input-holder">
          {/*   <input placeholder="Departure" className="date-selection-departure" type="date" /> */}
            <DatePicker
            className="date-selection-departure"
              selected={departureDate}
              dateFormat="yyyy-MM-dd"
              onChange={(date) => setDepartureDate(date)}
              isClearable={false}
              placeholderText="Departure"
            />
             <Calendar />
             {errorMessage("departure")}
            
          </div>
          <div className="date-selection-return input-holder">
            {/* <input placeholder="Return" className="date-selection-return" type="date" /> */}
            <DatePicker
              className="date-selection-return"
                selected={returnDate}
                dateFormat="yyyy-MM-dd"
                onChange={(date) => setReturnDate(date)}
                isClearable={false}
                placeholderText="Return"
            />
            <Calendar />
            {errorMessage("return")}
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
  