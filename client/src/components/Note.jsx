import React from 'react'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Note';
import NoteInfo from './NoteInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);
import { DashboardContext } from '../pages/DashboardLayout';
import { useState, createContext, useContext } from 'react';


const Note = ({
    _id,title,content, event, startdate,enddate
}) => {
  const { user } = useContext(DashboardContext); 
  return  (
    <Wrapper>
      <header>
        <div className="info">
          <h5>{title}</h5>
        </div>
      </header>
      <div className='content'>
        <div className="content-center">
          <NoteInfo icon={FaLocationArrow} text={"notatka/uwagi: "+content}></NoteInfo>
          <NoteInfo icon={FaLocationArrow} text={"wydarzenie: "+event}></NoteInfo>
          <NoteInfo icon={FaLocationArrow} text={"początek wydarzenia: "+startdate}></NoteInfo>
          <NoteInfo icon={FaLocationArrow} text={"koniec wydarzenia: "+enddate}></NoteInfo>
        </div>
        
        <footer className='actions'>
          
          <Link to={`../edit-note/${_id}`} className='btn edit-btn'>Edytuj</Link>
          <Form method='post' action={`../delete-note/${_id}`}>
            <button type="submit" className='btn delete-btn'>
              Usuń
            </button>
          </Form>

        </footer>
      </div>
    </Wrapper>
    
  );
};

export default Note;