 import React, { useEffect, useState } from 'react';

import Logo from '../../../public/images/mito_logo.svg';
import Arrow_left from '../../../public/images/arrow_left.svg';
import Arrow_right from '../../../public/images/arrow_right.svg';
import Chevron_right from '../../../public/images/right-arrow-chevron.svg';
import Chevron_left from '../../../public/images/left-arrow-chevron.svg';
import Blue_Arrow_right from '../../../public/images/blue_arrow_right.svg';
import Black_Arrow_right from '../../../public/images/black_arrow_right.svg';
import Plane from '../../../public/images/plane.svg';
import DatePicker from "react-datepicker";
import Select from 'react-select'
import dayjs from 'dayjs'; 
import axios from "axios";

const SearchResult = () => {

  const [selectedFlight, setSelectedFlight] = useState({
    OriginIata: "BUD",
    DestinIata : "BCN",
    DepartureShortName: "Budapest",
    ArrivalShortName : "Barcelona El Prat",
    DepartureDate : "2020-07-01",
    ReturnDate : "2020-07-01",
  });

/*   const [selectedDepTicket, setSelectedDepTicket] = useState(null );

  const [selectedRetTicket, setSelectedRetTicket] = useState(null);
 */
  const [selectedDepTicket, setSelectedDepTicket] = useState( {
    OriginIata: "BUD",
   DestinIata : "BCN",
   DepartureDate : "2020-07-01T05:50:00+0200",
   ArrivalDate : "2020-07-01T08:50:00+0200",
   Price: 50,
   TicketId: "",
 });

  const [selectedRetTicket, setSelectedRetTicket] = useState( {
    OriginIata: "BCN",
   DestinIata : "BUD",
   DepartureDate : "2020-07-01T05:50:00+0200",
   ArrivalDate : "2020-07-01T08:50:00+0200",
   Price: 60,
   TicketId: "",

 });

  const [availableTickets, setAvailableTickets] = useState([]);
  const [availableReturnTickets, setAvailableReturnTickets] = useState([]);

  const prevDepartureDate = dayjs(selectedFlight.DepartureDate).subtract(1, 'd');
  const nextDepartureDate = dayjs(selectedFlight.DepartureDate).add(1, 'd');

  const prevReturnDate = dayjs(selectedFlight.ReturnDate).subtract(1, 'd');
  const nextReturnDate = dayjs(selectedFlight.ReturnDate).add(1, 'd');

  const [isLoading, setIsLoading] = useState(true);

  const SearchFlights = async () => {

    const OriginIata = "BUD";
    const DestinIata = "BCN";
    const DepartureDate = "2020-07-01";
    const ReturnDate = "2020-07-01";


    try {

      const responsedep = await axios.get(`https://mock-air.herokuapp.com/search?departureStation=${selectedFlight.OriginIata}&arrivalStation=${selectedFlight.DestinIata}&date=${selectedFlight.DepartureDate}`);
      const responseret = await axios.get(`https://mock-air.herokuapp.com/search?departureStation=${selectedFlight.DestinIata}&arrivalStation=${selectedFlight.OriginIata}&date=${selectedFlight.ReturnDate}`);
      
     // console.log(responsedep);
     // console.log(responseret);
      setAvailableTickets(responsedep.data);
      setAvailableReturnTickets(responseret.data);
      setIsLoading(false);
     // console.log(availableTickets);
      
    } catch (error) {
      console.error(error);
    }
 }

/*  const GetTicketList = (tickets) => {
  
    tickets.map((tick, i) => {
      console.log(tick);
      return (
      <div key={i} className="ticket-grid-row" >
        <div className="ticket-grid-coll" >
          <span className="ticket_time">{dayjs(tick.departure).format('HH:MM')} <Black_Arrow_right/> {dayjs(tick.arrival).format('HH:MM')}</span>
        </div>
        {tick.fares.map((fare, y) => {
          return (
            <div key={y} className="ticket-grid-coll" >
            { (i === 0 ?  <span className="ticket_def">{fare.bundle}</span> : "" ) }
              <button>${fare.price}</button>
            </div>
          )
        })}
      </div>
      )
    })
 } */


 const isButtonSelected = (ticketId , dir) => {
   if(dir === "dep"){
    if(selectedDepTicket.TicketId === ticketId)
      return true
    return false;
   }else if(dir === "ret"){
      if(selectedRetTicket.TicketId === ticketId)
      return true
    return false;
   }
 }

 const HandleDepTicketSelect = (fare, ticket) =>{

  console.log(fare.price);
  console.log(ticket);
  const modDepTicket = {...selectedDepTicket}
  modDepTicket.Price = fare.price;
  modDepTicket.DepartureDate = ticket.departure;
  modDepTicket.ArrivalDate = ticket.arrival;
  modDepTicket.TicketId = fare.fareSellKey;
  setSelectedDepTicket(modDepTicket);
  
 }

 const HandleRetTicketSelect = (fare, ticket) =>{

  console.log(fare.price);
  console.log(ticket);
  const modRetTicket = {...selectedRetTicket}
  modRetTicket.Price = fare.price;
  modRetTicket.DepartureDate = ticket.departure;
  modRetTicket.TicketId = fare.fareSellKey;
  setSelectedRetTicket(modRetTicket);

  
 }



 const HandleDepDateChange = (newdate) =>{

  newdate = dayjs(newdate).format("YYYY-MM-DD");
  console.log(newdate);
  const modFllight = {...selectedFlight};
  modFllight.DepartureDate = newdate;
  setSelectedFlight(modFllight);
  setIsLoading(true);
 }

 const HandleRetDateChange = (newdate) =>{

  newdate = dayjs(newdate).format("YYYY-MM-DD");
  console.log(newdate);
  const modFllight = {...selectedFlight};
  modFllight.ReturnDate = newdate;
  setSelectedFlight(modFllight);
  setIsLoading(true);

 }

 const GetTicketSum = () => {
   const depTicketPrice = (selectedDepTicket === null ? 0 : selectedDepTicket.Price);
   const retTicketPrice = (selectedRetTicket=== null ? 0 : selectedRetTicket.Price);
    return depTicketPrice+retTicketPrice;
 } 

 const IsBasketEmpty = () => {
  if(selectedDepTicket === null && selectedRetTicket === null){
    return true
  }else{
    return false;
  }
 }

 useEffect(() => {
  SearchFlights();


}, [selectedFlight]);
  
    return (
    <div className="result-selection">
      <div className="result-selection-header">
        <Logo className="mito-logo" />
        <div className="result-selected-ports">
          
            <div className="from">
              <p>Leaving from</p>
                {selectedFlight.DepartureShortName}
            </div> 
            <div className="arrows">
              <Arrow_right />
              <Arrow_left />
            </div>
            <div className="to">
            {selectedFlight.ArrivalShortName}
            </div> 
        </div> 
      </div>
      <div className="result-selection-content">
       <div className="result-selection-left" >
         <div className="ticket-basket" >
          <div className="ticket-basket-flights" >
            Flights <span className="price sum">${GetTicketSum()}</span>
          </div>
          <div className="ticket-basket-flight-list" >

            {( IsBasketEmpty() ?
                <div className="empty-list">
                  Choose an outbound flight
                </div>
               : 
                <>
                {(selectedDepTicket != null ?
                <div className="ticket-basket-flight-listitem" >
                  <div className="mini-calendar">
                    <div className="month">
                        {dayjs(selectedDepTicket.DepartureDate).format("MMM")}
                    </div>
                    <div className="day">
                    {dayjs(selectedDepTicket.DepartureDate).format("DD")}
                    </div>

                    </div>
                    <div className="dep-destination">
                      <div className="dep-destination-ports">
                       <span>{selectedFlight.DepartureShortName} - </span>
                       <span>{selectedFlight.ArrivalShortName}</span>
                      </div>
                      <div className="dep-destination-time">
                        {dayjs(selectedDepTicket.DepartureDate).format("ddd hh:mm")} - {dayjs(selectedDepTicket.ArrivalDate).format("hh:mm")}
                      </div>
                    </div>
                </div>
                : 
                "" )}
                 {(selectedRetTicket != null ?

                  <div className="ticket-basket-flight-listitem" >
                    <div className="mini-calendar">
                      <div className="month">
                          {dayjs(selectedRetTicket.DepartureDate).format("MMM")}
                      </div>
                      <div className="day">
                       {dayjs(selectedRetTicket.DepartureDate).format("DD")}
                      </div>

                      </div>
                      <div className="dep-destination">
                        <div className="dep-destination-ports">
                          <span>{selectedFlight.ArrivalShortName} - </span>
                          <span>{selectedFlight.DepartureShortName}</span>
                        </div>
                        <div className="dep-destination-time">
                          {dayjs(selectedRetTicket.DepartureDate).format("ddd hh:mm")} - {dayjs(selectedRetTicket.ArrivalDate).format("hh:mm")}
                        </div>
                      </div>
                  </div>
                  : 
                  "" )}
                </>            
               )}

          </div>
          <div className="ticket-basket-flights-total" >
            Total <span className="price total">${GetTicketSum()}</span>
          </div>
          <div className="ticket-basket-purchase" >
            <button className={(IsBasketEmpty ? "" : "disabled" )} >Pay Now</button>
          </div>
         </div>
       </div>
       <div className="result-selection-right" >
        <div className="result-selection-title">
          <Plane />
          <h2>Select Flight</h2>

        </div>
        <div className="result-selection-table outbound">
          <div className="ticket-header" >
            <div className="direction">
              OUTBOUND 
            </div>
            <div className="cites">
              <div className="from">
              {selectedFlight.DepartureShortName}
              </div> 
              <Blue_Arrow_right />
              <div className="to">
              {selectedFlight.ArrivalShortName}
              </div> 
            </div>
          </div>
          <div className="ticket-date-selection" >
            <div className="prev-date">
               <a onClick={() => HandleDepDateChange(prevDepartureDate)}>
                <Chevron_left />
                <span>{dayjs(prevDepartureDate).format('ddd D MMMM')}</span>
                </a>
              </div>
              <div className="act-date">
                {dayjs(selectedFlight.DepartureDate).format('dddd, D MMMM YYYY')}
                
              </div>
              <div className="next-date">
              <a  onClick={() => HandleDepDateChange(nextDepartureDate)}>
              <span>{dayjs(nextDepartureDate).format('ddd D MMMM')}</span>
                <Chevron_right />
                </a>
              </div>
          </div>
          
          <div className="ticket-grid" >
              { 
                (isLoading ? 
                  <div className="throbber" ><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
                  :
                (availableTickets.length != 0 ?
                  
                  availableTickets.map((tick, i) => {
                    return (
                    <div key={i} className="ticket-grid-row" >
                      <div className="ticket-grid-coll" >
                        <span className="ticket_time">{dayjs(tick.departure).format('hh:mm')} <Black_Arrow_right/> {dayjs(tick.arrival).format('hh:mm')}</span>
                      </div>
                      {tick.fares.map((fare, y) => {
                        return (
                          <div key={y} className="ticket-grid-coll" >
                          { (i === 0 ?  <span className="ticket_def">{fare.bundle}</span> : "" ) }
                          { (tick.remainingTickets != 0 ?  <button className={(isButtonSelected(fare.fareSellKey, "dep") ? "selected" : "")}  onClick={() => HandleDepTicketSelect(fare, tick)} >${fare.price}</button> : "" ) }
                          </div>
                        )
                      })}
                    </div>
                    )
                  })
                  
                  : 
                  "Empty"
                  )
               )
              }
            </div>
          </div>
          <div className="result-selection-table inbound">
            <div className="ticket-header" >
              <div className="direction">
                INBOUND 
              </div>
              <div className="cites">
                <div className="from">
                {selectedFlight.ArrivalShortName}
                </div> 
                <Blue_Arrow_right />
                <div className="to">
                {selectedFlight.DepartureShortName}
                </div> 
              </div>
            </div>
          {
          (selectedFlight.ReturnDate != null ?
            <>
              <div className="ticket-date-selection" >
                <div className="prev-date">
                  <a onClick={() => HandleRetDateChange(prevReturnDate)} >
                    <Chevron_left />
                    <span>{dayjs(prevReturnDate).format('ddd D MMMM')}</span>
                  </a>
                  </div>
                  <div className="act-date">
                    {dayjs(selectedFlight.ReturnDate).format('dddd, D MMMM YYYY')}
                  </div>
                  <div className="next-date">
                    <a onClick={() => HandleRetDateChange(nextReturnDate)} >
                    <span>{dayjs(nextReturnDate).format('ddd D MMMM')}</span>
                      <Chevron_right />
                      </a>
                  </div>
              </div>
              <div className="ticket-grid" >
              { 
                  (isLoading ? 
                    <div className="throbber" ><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
                    :
                  availableReturnTickets.map((tick, i) => {
                   // console.log(tick);
                    return (
                    <div key={i} className="ticket-grid-row" >
                      <div className="ticket-grid-coll" >
                        <span className="ticket_time">{dayjs(tick.departure).format('hh:hh')} <Black_Arrow_right/> {dayjs(tick.arrival).format('hh:hh')}</span>
                      </div>
                      {tick.fares.map((fare, y) => {
                        return (
                          <div key={y} className="ticket-grid-coll" >
                          { (i === 0 ?  <span className="ticket_def">{fare.bundle}</span> : "" ) }
                          { (tick.remainingTickets != 0 ?  <button className={(isButtonSelected(fare.fareSellKey, "ret") ? "selected" : "" )} onClick={() => HandleRetTicketSelect(fare, tick)}  >${fare.price}</button> : "" ) }
                          </div>
                        )
                      })}
                    </div>
                    )
                  })
                  )
                }  
              </div>
            </>
            : "" )
          }
          
        </div>
       </div>
      </div>
    </div>
    );
  };
  
  export default SearchResult;
  