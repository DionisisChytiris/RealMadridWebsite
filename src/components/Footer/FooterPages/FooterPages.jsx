/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components'
import "./FooterPages.css";
import { DataFt } from "../../../../data/Footer/DataFt";

const StyledNavLink = styled(NavLink)`
  color: blue;
   &.active{
    color: #21416E;
   }
`

const FooterPages = () => {
  return (
    <div className="footerPages">
      <div className="foot-container">
        <div className="foot1 test1">
          {/* {DataFt.map((item, index)=>{
            return(
              <div key={index}>
                <NavLink
                  to={item.link}
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "#21416E",
                  })}
                >
                  {item.title}
                </NavLink>
              </div>
            )
          })} */}
          <a href="/tickets" className="bold">
            Football
          </a>
          <StyledNavLink to="/tickets" activeClassName='active'>First Team</StyledNavLink>
          <StyledNavLink to="/tickets" activeClassName='active'>Academy</StyledNavLink>
          <StyledNavLink to="/tour" activeClassName='active'>Women s Team</StyledNavLink>
        </div>
        <div className="foot1 test1">
          <a href="/tickets" className="bold">
            Basketball
          </a>
          <NavLink
            to="/tickets"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "#21416E",
            })}
          >
            Basketball First Team
          </NavLink>
        </div>
        <div className="foot1 test1">
          <a href="/tickets" className="bold">
            The Club
          </a>
          <a href="/tickets">Schedule</a>
          <a href="/tickets">Transparency</a>
          <a href="/tickets">Sponsors</a>
          <a href="/tickets">Values</a>
          <a href="/tickets">Honors</a>
          <a href="/tickets">History</a>
          <a href="/tickets">Fan clubs</a>
          <a href="/tickets">Bernabéu Stadium</a>
          <a href="/tickets">Real Madrid Club</a>
          <a href="/tickets">WiZink Center</a>
          <a href="/tickets">Contact</a>
        </div>
        <div className="foot1 test2">
          <a href="/tickets" className="bold">
            Bernabéu Stadium
          </a>
          <a href="/tickets" className="bold">
            RMTV live
          </a>
          <a href="/tickets" className="bold">
            News
          </a>
          <a href="/tickets" className="bold">
            Foundation Real Madrid
          </a>
          <a href="/tickets" className="bold">
            RM Next
          </a>
          <a href="/tickets" className="bold">
            RM Graduate School
          </a>
        </div>
        <div className="foot1 test3">
          <a href="/tickets" className="bold">
            Madridistas
          </a>
          <a href="/tickets" className="bold">
            Hospitality
          </a>
          <a href="/tickets" className="bold">
            Shop
          </a>
          <a href="/tickets" className="bold">
            Tour
          </a>
          <a href="/tickets" className="bold">
            Tickets
          </a>
          <a href="/tickets" className="bold">
            RM Play
          </a>
        </div>
      </div>

      <div className="footerline"></div>
    </div>
  );
};

export default FooterPages;
