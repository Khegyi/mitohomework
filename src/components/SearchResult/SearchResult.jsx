import React, { useEffect, useState } from 'react';
import Logo from '../../../public/images/mito_logo.svg';
import Attention from '../../../public/images/attention.svg';
import Arrow_left from '../../../public/images/arrow_left.svg';
import Arrow_right from '../../../public/images/arrow_right.svg';
import Arrow_Down from '../../../public/images/down-arrow-chevron.svg'
import Chevron_right from '../../../public/images/right-arrow-chevron.svg';
import Chevron_left from '../../../public/images/left-arrow-chevron.svg';
import Blue_Arrow_right from '../../../public/images/blue_arrow_right.svg';
import Black_Arrow_right from '../../../public/images/black_arrow_right.svg';
import Plane from '../../../public/images/plane.svg';
import Calendar from '../../../public/images/calendar.svg';
import DatePicker from "react-datepicker";
import dayjs from 'dayjs'; 
import axios from "axios";

const SearchResult = ( props ) => {

  const [selectedFlight, setSelectedFlight] = useState(props.selected);

  const [selectedDepTicket, setSelectedDepTicket] = useState(null);
  const [selectedRetTicket, setSelectedRetTicket] = useState(null);

  const [availableTickets, setAvailableTickets] = useState([]);
  const [availableReturnTickets, setAvailableReturnTickets] = useState([]);

  const [returnDateMod, setReturnDateMod] = useState(null);
  const [returnDateModError, setReturnDateModError] = useState("");

  const prevDepartureDate = dayjs(selectedFlight.DepartureDate).subtract(1, 'd');
  const nextDepartureDate = dayjs(selectedFlight.DepartureDate).add(1, 'd');
  const prevReturnDate = dayjs(selectedFlight.ReturnDate).subtract(1, 'd');
  const nextReturnDate = dayjs(selectedFlight.ReturnDate).add(1, 'd');

  const [isFlightReturn, setIsFlightReturn] = useState(selectedFlight.ReturnDate != null);
  const [isLoading, setIsLoading] = useState(true);
  const [isBasketEmpty, setIsBasketEmpty] = useState(true);
  const [isBasketClosed, setIsBasketClosed] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const now = dayjs();

  //Get available tickets for the selected Flights
  const SearchFlights = async () => {

    try {
      const responsedep = await axios.get(`https://mock-air.herokuapp.com/search?departureStation=${selectedFlight.OriginIata}&arrivalStation=${selectedFlight.DestinIata}&date=${selectedFlight.DepartureDate}`);
      if(isFlightReturn){
        const responseret = await axios.get(`https://mock-air.herokuapp.com/search?departureStation=${selectedFlight.DestinIata}&arrivalStation=${selectedFlight.OriginIata}&date=${selectedFlight.ReturnDate}`);
        setAvailableReturnTickets(responseret.data);
      }
      setAvailableTickets(responsedep.data);
      setIsLoading(false);     
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
 }
//Selected ticket list item module
const TicketListItem = (selectedTicket, dir) =>{
  const Ticket = {...selectedTicket}

  if(dir === "dep")
  {
    Ticket.fromDest = selectedFlight.DepartureShortName
    Ticket.toDest = selectedFlight.ArrivalShortName
  }
  else{
    Ticket.fromDest = selectedFlight.ArrivalShortName
    Ticket.toDest = selectedFlight.DepartureShortName
  }
  return (
    <div className="ticket-listitem" >
      <div className="mini-calendar">
        <div className="month">
            {dayjs(Ticket.DepartureDate).format("MMM")}
        </div>
        <div className="day">
        {dayjs(Ticket.DepartureDate).format("D")}
        </div>
        </div>
        <div className="dep-destination">
          <div className="dep-destination-ports">
          <span>{Ticket.fromDest} - </span>
          <span>{Ticket.toDest}</span>
          </div>
          <div className="dep-destination-time">
            {dayjs(Ticket.DepartureDate).format("ddd hh:mm")} - {dayjs(Ticket.ArrivalDate).format("hh:mm")}
          </div>
        </div>
    </div>
  )
 }
//Set Return date if previously was not selected
 const modifyReturnDate = () => {
   
  if(dayjs(returnDateMod).format("YYYY-MM-DD") < dayjs(now).format("YYYY-MM-DD") ){
    setReturnDateModError("Return date cannot be earlier than Today");
  }
  else if(dayjs(returnDateMod).format("YYYY-MM-DD") < dayjs(selectedFlight.DepartureDate).format("YYYY-MM-DD") ){
    setReturnDateModError("Return date cannot be earlier Departure date");
  }
  else if(returnDateMod != null){
    HandleRetDateChange(returnDateMod);
    setIsFlightReturn(true)
  }
 }
 // Show purchase modal
 const HandlePurchase = () => {

  if(!isBasketEmpty){
    setPurchased(true);
    setIsBasketEmpty(true);
  }
 }
 //Set Departure Tickets detail
 const HandleDepTicketSelect = (fare, ticket) => {

  const modDepTicket = {...selectedDepTicket}
  modDepTicket.Price = fare.price;
  modDepTicket.DepartureDate = ticket.departure;
  modDepTicket.ArrivalDate = ticket.arrival;
  modDepTicket.TicketId = fare.fareSellKey;
  setSelectedDepTicket(modDepTicket);
  setIsBasketEmpty(false);
 }
  //Set Return Tickets detail
 const HandleRetTicketSelect = (fare, ticket) => {

    const modRetTicket = {...selectedRetTicket}
    modRetTicket.Price = fare.price;
    modRetTicket.DepartureDate = ticket.departure;
    modRetTicket.ArrivalDate = ticket.arrival;
    modRetTicket.TicketId = fare.fareSellKey;
    setSelectedRetTicket(modRetTicket);
    setIsBasketEmpty(false);

 }
//Set Departure Date
 const HandleDepDateChange = (newdate) => {

    newdate = dayjs(newdate).format("YYYY-MM-DD");
    const modFllight = {...selectedFlight};
    modFllight.DepartureDate = newdate;
    setSelectedFlight(modFllight);
    setIsLoading(true);
 }
 //Set Return Date
 const HandleRetDateChange = (newdate) => {

  newdate = dayjs(newdate).format("YYYY-MM-DD");
  const modFllight = {...selectedFlight};
  modFllight.ReturnDate = newdate;
  setSelectedFlight(modFllight);
  setIsLoading(true);

 }
 //Open Basket
 const handleBasketCollapse = () => {
   setIsBasketClosed(!isBasketClosed);
 }
 //Reset Basket, Return and Deparutre Ticket
 const ResetSearch = () => {
  setSelectedDepTicket(null);
  setSelectedRetTicket(null);
  setPurchased(false);
 }
 //Check if date is Today
 const isDateToday = (date) => {
  if(dayjs(date).format("YYYY-MM-DD") === dayjs(now).format("YYYY-MM-DD")){
    return true
  }
  return false
 }
 //Summarize Selected Ticket prices
 const GetTicketSum = () => {
   const depTicketPrice = (selectedDepTicket === null ? 0 : selectedDepTicket.Price);
   const retTicketPrice = (selectedRetTicket=== null ? 0 : selectedRetTicket.Price);
    return depTicketPrice+retTicketPrice;
 } 
 //Check if Ticket for the selected Button was selected before, and should it be active.
 const isButtonSelected = (ticketId , dir) => {
  if(!isBasketEmpty){
   if(dir === "dep"){
    if(selectedDepTicket?.TicketId === ticketId)
      return true
    return false;
   }else if(dir === "ret"){
      if(selectedRetTicket?.TicketId === ticketId)
      return true
    return false;
   }
  }
 }
 useEffect(() => {
  SearchFlights();
}, [selectedFlight]);
  
    return (
      <>
      {(purchased ?  
      <div className="modal-wrapper">
        <div className="confirm-modal">
          <div className="confirm-modal-title">
            Thanks for buying your tickets at mito airlines
          </div>
          <div className="confirm-modal-content">
            <div className="confirm-modal-tickets">
                { (selectedDepTicket != null ? TicketListItem(selectedDepTicket, "dep") : "")}
                { (selectedRetTicket != null ? TicketListItem(selectedRetTicket, "ret") : "")}
            </div>
            <div className="confirm-modal-sum">
              <div className="confirm-modal-sum-price">
                Total: <span className="price" >${GetTicketSum()}</span>
              </div>
              <div className="confirm-modal-sum-reset">
                <a onClick={() => ResetSearch()}> No, Thanks. (Reset)</a>
              </div>
          </div>
          </div>
        </div>
        </div>
      : "" 
      )}
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
              {(isFlightReturn ? <Arrow_left /> : "")}
            </div>
            <div className="to">
            {selectedFlight.ArrivalShortName}
            </div> 
        </div> 
      </div>
      <div className="result-selection-content">
       <div className="result-selection-left" >
         <div className="ticket-basket" >
          <div onClick={() => handleBasketCollapse()} className="ticket-basket-flights" >
            <span>Flights</span> 
            <span className={`arrow-down ${(isBasketClosed ? "" : "turned")}`}><Arrow_Down /></span>
            <span className="price sum">${GetTicketSum()}</span>
          </div>
          <div className={`ticket-basket-flight-list ${(isBasketClosed ? "collapsed" : "")}`} >
          
            {( isBasketEmpty ?
                <div className="empty-list">
                  Choose an outbound flight
                </div>
               : 
                <>
                {(selectedDepTicket != null ?
                    TicketListItem(selectedDepTicket , "dep")
                : 
                "" )}
                 {(selectedRetTicket != null ?

                    TicketListItem(selectedRetTicket , "ret")
                  : 
                  "" )}
                </>            
               )}
          </div>
          <div className="ticket-basket-flights-total" >
            Total <span className="price total">${GetTicketSum()}</span>
          </div>
          <div className="ticket-basket-purchase" >
            <button onClick={() => HandlePurchase()} className={(isBasketEmpty ? "disabled" : "" )} >Pay Now</button>
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

           { ( !isDateToday(selectedFlight.DepartureDate)  ?
                    <a onClick={() => HandleDepDateChange(prevDepartureDate) }>
                    <Chevron_left />
                    <span>{dayjs(prevDepartureDate).format('ddd D MMMM')}</span>
                </a>
                    : 
                    ""
                    )
              }
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
                  <div className="no-ticket">
                    <span>No Tickets Available</span>
                  </div>
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
          (isFlightReturn ?
            <>
              <div className="ticket-date-selection" >
                <div className="prev-date">
                {( !isDateToday(selectedFlight.DepartureDate)  ? 
                  <a onClick={() => HandleRetDateChange(prevReturnDate)} >
                    <Chevron_left />
                    <span>{dayjs(prevReturnDate).format('ddd D MMMM')}</span>
                  </a>
                  :  "" )}
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
                  (availableTickets.length != 0 ?  
                  availableReturnTickets.map((tick, i) => {
                    return (
                    <div key={i} className="ticket-grid-row" >
                      <div className="ticket-grid-coll" >
                        <span className="ticket_time">{dayjs(tick.departure).format('hh:mm')} <Black_Arrow_right/> {dayjs(tick.arrival).format('hh:mm')}</span>
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
                  : 
                  <div className="no-ticket">
                    <span>No Tickets Available</span>
                  </div>
                  )
                  )
                }  
              </div>
            </>
            : 
            <div className="date-selection-return">
              <div className="input-holder">
                <DatePicker
                  className="date-selection-return"
                    selected={returnDateMod}
                    dateFormat="yyyy-MM-dd"
                   onChange={(date) => setReturnDateMod(date)}
                    isClearable={false}
                    placeholderText="Return"
                />
                <Calendar />
                <a onClick={modifyReturnDate} className="search-btn">Search</a>
              </div>
              {(returnDateModError != "" ? 
                <div className={`error-message`}><Attention /><p>{returnDateModError}</p>
                </div> : "")}
            </div>
            )
          } 
        </div>
       </div>
      </div>
    </div>
    </>
    );
  };
  
  export default SearchResult;
  