import React from 'react'
import Wrapper from '../assets/wrappers/UserInfo';
const UserInfo = ({icon,text}) => {
  return ( <Wrapper>
    <span className='job-icon'>{icon}</span>
    <span className='job-text'>{text}</span>
  </Wrapper>
    
  );
};

export default UserInfo;