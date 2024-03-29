import React from 'react'
import User from './User';
import Wrapper from "../assets/wrappers/UsersContainer";
import {useAllUsersContext} from "../pages/AllUsers";

const UsersContainer = () => {
    const {data} =  useAllUsersContext()
    const {users} = data
    if(users.length ===0){
        return (<Wrapper>
            <h2>Brak użytkowników</h2>
        </Wrapper>
        );
    };
  return <Wrapper>
    <div className="users">
        {users.map((user)=>{
            return <User key={user._id} {...user}/>
        })}
    </div>
  </Wrapper>
    
};

export default UsersContainer;