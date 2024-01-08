import { useDashboardContext } from "../pages/DashboardLayout"
import links from "../utils/links"
import { NavLink } from "react-router-dom"
import { DashboardContext } from '../pages/DashboardLayout';
import { useState, createContext, useContext } from 'react';

const NavLinks = ({isBigSidebar}) => {
    const {toggleSidebar,user} = useDashboardContext();
    const userRole = user.role;
  return (
    <div className='nav-links'>
             {links.filter(link => !link.role || link.role === userRole).map((link) => {
              const { text, path, icon } = link;

              return (
                <NavLink
                  to={path}
                  key={text}
                  className='nav-link'
                  onClick={isBigSidebar ? null : toggleSidebar}
                  // will discuss in a second
                  end
                >
                  <span className='icon'>{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
  )
}

export default NavLinks