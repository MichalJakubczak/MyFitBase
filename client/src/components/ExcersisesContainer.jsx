import React from 'react'
import Excercise from './Excercise';
import Wrapper from '../assets/wrappers/ExcersisesContainer';
import {useAllExcersisesContext} from '../pages/AllExcersises';


const ExcersisesContainer = () => {
  const {data} = useAllExcersisesContext();
  const {excercises} = data;
  if(excercises.length === 0){
    return (
    <Wrapper>
      <h2>Brak ćwiczeń do wyświetlenia...</h2>
    </Wrapper>
    );
  }
  return (<Wrapper>
    <div className='excersises'>
      {excercises.map((excercise)=>{
        return <Excercise key={excercise._id} {...excercise}/>
      })}
    </div>
  </Wrapper>
  );
  
};

export default ExcersisesContainer;