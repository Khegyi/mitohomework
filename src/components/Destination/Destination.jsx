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
  const [originPortLabel, setOriginPortLabel] = useState(false);
  const [destinPortLabel, setDestinPortLabel] = useState(false);

  //Get Available Airports and Create options for select input
  const GetPorts = async () => {
    
        try {
          const response = await axios.get('https://mock-air.herokuapp.com/asset/stations');
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
  // Send Flight information to SearchResult Component
  const SearchFlights = async () => {

      if(Validation()){
        const DepartureDate = dayjs(departureDate).format('YYYY-MM-DD');
        let ReturnDate = null;
        if(returnDate !== null){
          ReturnDate = dayjs(returnDate).format('YYYY-MM-DD');
          }
        const selectedFight = {
          OriginIata: selectedOriginPort.value,
          DestinIata : selectedDestinPort.iata,
          DepartureShortName: selectedOriginPort.label,
          ArrivalShortName : selectedDestinPort.shortName,
          DepartureDate : DepartureDate,
          ReturnDate : ReturnDate,
        }
        props.setflight(selectedFight);
      }
  }
  //Validate submit
  const Validation = () => {
    var now = dayjs().format("YYYY-MM-DD");
    const someerror = [];
      if(selectedOriginPort.length=== 0){
        someerror.push({ labelname :"origin", message: "Please select origin"});
      }
      if(selectedDestinPort.length=== 0){
        someerror.push({ labelname :"destination", message: "Please select destination"});
      } 
      if(departureDate === null){
        someerror.push({ labelname :"departure", message: "Please select departure date"});
      }
      if(dayjs(departureDate).format("YYYY-MM-DD") < now){
        someerror.push({ labelname :"departure", message: "No timetravel!"});
      }
      if(dayjs(returnDate).format("YYYY-MM-DD") < now){
        someerror.push({ labelname :"return", message: "No timetravel!"});
      }
      if(dayjs(returnDate).format("YYYY-MM-DD") < dayjs(departureDate).format("YYYY-MM-DD")){
        someerror.push({ labelname :"return", message: "Must be after deparute date"});
      }
      setErrorMessages(someerror);
      if(someerror.length === 0){
        return true
      }
      return false
  }
  //Set Origin Airport and Filter Connections for Destination Airports
  const HandleOriginPortSelect = (originport) => {

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
        setOriginPortLabel(true);
        setFilteredOptions(connections);
        
      }else{
        setFilteredOptions([]);
        setOriginPortLabel(false);
      }
  }
  //Set Destination Airport
  const HandleDestinPortSelect = (destinport) => {
      setSelectedDestinPort(destinport);
      if(destinport != null){
       setDestinPortLabel(true);
      }else{
        setDestinPortLabel(false);
      }
  }
//Error message modul
  const errorMessage = (ename) => {
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
          <label className={(originPortLabel ? "shown" : "")}>Origin</label>
             <Select
                id="origin"
                className="basic-single"
                classNamePrefix="select"
                instanceId="origin"
                placeholder="Origin"
                isClearable={true}
                isSearchable={true}
                name="origin"
                options = {options}
                onChange={(val) => {
                  HandleOriginPortSelect(val);
                }}
              />
             {errorMessage("origin")}
          </div>
          <div className="flight-selection-destination input-holder">
              <label className={(destinPortLabel ? "shown" : "")}>Destination</label>
              <Select
                  id="destination"
                  instanceId="destination"
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Destination"
                  isClearable={true}
                  isSearchable={true}
                  name="destination"
                  options = {filteredOptions}
                  onChange={(val) => {
                    HandleDestinPortSelect(val);
                  }}
                />
           {errorMessage("destination")}
          </div>
        </div>
        <div className="date-selection">
          <div className="date-selection-origin input-holder">
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
  