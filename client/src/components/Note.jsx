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
    _id,title,content
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
          <NoteInfo icon={FaLocationArrow} text={content}></NoteInfo>
        </div>
        
        <footer className='actions'>
          
          <Link to={`../edit-exercise/${_id}`} className='btn edit-btn'>Edytuj</Link>
          <Form method='post' action={`../delete-exercise/${_id}`}>
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