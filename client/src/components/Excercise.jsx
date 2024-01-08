import React from 'react'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Excercise';
import ExcerciseInfo from './ExcerciseInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);
import { DashboardContext } from '../pages/DashboardLayout';
import { useState, createContext, useContext } from 'react';


const Excercise = ({
    _id,excersiseName,mainMuscle,addsMuscle,excersiseDescription,excersiseType
}) => {
  const { user } = useContext(DashboardContext); 
  const canEdit = user && user.role !== 'user';
  return  (
    <Wrapper>
      <header>
        <div className="main-icon">{excersiseType.charAt(0)}</div>
        <div className="info">
          <h5>{excersiseName}</h5>
          <p>{mainMuscle}</p>
        </div>
      </header>
      <div className='content'>
        <div className="content-center">
          <ExcerciseInfo icon={FaLocationArrow} text={"Mięsień pracujący dodatkowo: " + addsMuscle}></ExcerciseInfo>
          <ExcerciseInfo icon={FaBriefcase} text={excersiseDescription}></ExcerciseInfo>
          <ExcerciseInfo icon={FaCalendarAlt} text={"Gdzie najlepiej wykonywać ćwiczenie: " +excersiseType}></ExcerciseInfo>
        </div>
        {canEdit &&(
        <footer className='actions'>
          
          <Link to={`../edit-exercise/${_id}`} className='btn edit-btn'>Edytuj</Link>
          <Form>
            <button type="submit" className='btn delete-btn'>
              Usuń
            </button>
          </Form>

        </footer>
      
      )}
      </div>
    </Wrapper>
    
  );
};

export default Excercise;