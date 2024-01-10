import React from 'react'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/User';
import UserInfo from './UserInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);
import { DashboardContext } from '../pages/DashboardLayout';
import { useState, createContext, useContext } from 'react';


const User = ({
    _id,username, email,role
}) => {
  const { user } = useContext(DashboardContext); 
  return  (
    <Wrapper>
      <header>
        <div className="info">
          <h5>{username}</h5>
        </div>
      </header>
      <div className='content'>
        <div className="content-center">
          <UserInfo icon={FaLocationArrow} text={"nazwa użytkownika: "+username}></UserInfo>
          <UserInfo icon={FaLocationArrow} text={"email: "+email}></UserInfo>
          <UserInfo icon={FaLocationArrow} text={"rola : "+role}></UserInfo>
          
        </div>
        

          
      </div>
    </Wrapper>
    
  );
};

export default User;