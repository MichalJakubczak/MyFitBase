import React from 'react'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Excercise';
import ExcerciseInfo from './ExcerciseInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Excercise = ({
    _id,excersiseName,mainMuscle,addsMuscle,excersiseDescription,excersiseType
}) => {
  return (
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
        <footer className='actions'>
          <Link to='/dashboard/edit-job' className='btn edit-btn'>Edytuj</Link>
          <Form>
            <button type="submit" className='btn delete-btn'>
              Usuń
            </button>
          </Form>

        </footer>
      </div>
    </Wrapper>
  )
}

export default Excercise;