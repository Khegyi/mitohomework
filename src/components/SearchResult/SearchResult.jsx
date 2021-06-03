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
 
  
    return (
    <div className="result-selection">
      <div className="result-selection-header">
        <Logo className="mito-logo" />
        <div className="result-selected-ports">
          
            <div className="from">
              <p>Leaving from</p>
                Budapest
            </div> 
            <div className="arrows">
              <Arrow_right />
              <Arrow_left />
            </div>
            <div className="to">
              Barcelona El Prat
            </div> 
        </div> 
      </div>
      <div className="result-selection-content">
       <div className="result-selection-left" >
         <div className="ticket-basket" >
          <div className="ticket-basket-flights" >
            Flights <span className="price sum">$0</span>
          </div>
          <div className="ticket-basket-flight-list" >
            <div className="empty-list">
               Choose an outbound flight
            </div>
            <div className="ticket-basket-flight-listitem" >
              
            </div>
            <div className="ticket-basket-flight-listitem" >
              
            </div>
          </div>
          <div className="ticket-basket-flights-total" >
            Total <span className="price total">$0</span>
          </div>
          <div className="ticket-basket-purchase" >
            <button>Pay Now</button>
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
                Budapest
              </div> 
              <Blue_Arrow_right />
              <div className="to">
                Barcelona
              </div> 
            </div>
          </div>
          <div className="ticket-date-selection" >
            <div className="prev-date">
                <Chevron_left />
                <span>WED 7 OCTOBER</span>
              </div>
              <div className="act-date">
                Saturday, 3 November 2015
              </div>
              <div className="next-date">
               <span> SAT 10 OCTOBER</span>
                <Chevron_right />
              </div>
          </div>
          <div className="ticket-grid" >
              <div className="ticket-grid-row" >
                <div className="ticket-grid-coll" >
                  <span className="ticket_time">06:02 <Black_Arrow_right/> 07:35</span>
                </div>
                <div className="ticket-grid-coll" >
                  <span className="ticket_def">Basic</span>
                  <button>$9.99</button>
                </div>
                <div className="ticket-grid-coll" >
                <span className="ticket_def">Standard</span>
                  <button>$19.99</button>
                </div>
                <div className="ticket-grid-coll" >
                <span className="ticket_def">Plus</span>
                  <button>$29.99</button>
                </div>
              </div>
              <div className="ticket-grid-row" >
                <div className="ticket-grid-coll" >
                   <span className="ticket_time">06:02 <Black_Arrow_right/> 07:35</span>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$9.99</button>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$19.99</button>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$29.99</button>
                </div>
              </div>
              <div className="ticket-grid-row" >
                <div className="ticket-grid-coll" >
                  <span className="ticket_time">06:02 <Black_Arrow_right/> 07:35</span>
                </div>
                <div className="ticket-grid-coll" >
                  <button className="selected">$9.99</button>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$19.99</button>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$29.99</button>
                </div>
              </div>
          </div>
          </div>
          <div className="result-selection-table inbound">
          <div className="ticket-header" >
            <div className="direction">
              INBOUND 
            </div>
            <div className="cites">
              <div className="from">
              Barcelona
              </div> 
              <Blue_Arrow_right />
              <div className="to">
                Budapest
              </div> 
            </div>
          </div>
          <div className="ticket-date-selection" >
            <div className="prev-date">
                <Chevron_left />
                <span>WED 7 OCTOBER</span>
              </div>
              <div className="act-date">
                Saturday, 3 November 2015
              </div>
              <div className="next-date">
               <span> SAT 10 OCTOBER</span>
                <Chevron_right />
              </div>
          </div>
          <div className="ticket-grid" >
              <div className="ticket-grid-row" >
                <div className="ticket-grid-coll" >
                  <span className="ticket_time">06:02 <Black_Arrow_right/> 07:35</span>
                </div>
                <div className="ticket-grid-coll" >
                  <span className="ticket_def">Basic</span>
                  <button>$9.99</button>
                </div>
                <div className="ticket-grid-coll" >
                <span className="ticket_def">Standard</span>
                  <button>$19.99</button>
                </div>
                <div className="ticket-grid-coll" >
                <span className="ticket_def">Plus</span>
                  <button>$29.99</button>
                </div>
              </div>
              <div className="ticket-grid-row" >
                <div className="ticket-grid-coll" >
                   <span className="ticket_time">06:02 <Black_Arrow_right/> 07:35</span>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$9.99</button>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$19.99</button>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$29.99</button>
                </div>
              </div>
              <div className="ticket-grid-row" >
                <div className="ticket-grid-coll" >
                  <span className="ticket_time">06:02 <Black_Arrow_right/> 07:35</span>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$9.99</button>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$19.99</button>
                </div>
                <div className="ticket-grid-coll" >
                  <button>$29.99</button>
                </div>
              </div>
          </div>
          </div>
        
       </div>
      </div>
    </div>
    );
  };
  
  export default SearchResult;
  