import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypeSelector } from "../hooks/UseTypeSelector";
import {useEffect} from 'react';
import {fetchUsers} from '../action-creator/use';
import './UserList.css';





const UserList:React.FC = ()=>{
    const {users, loading, error} = useTypeSelector (state=>state.user)
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(fetchUsers())}, [])
        if (loading){
            return <h1> Loading...</h1>
        }
        if (error){
            return <h1>ERROR</h1>
        }
      
    return (
        
        
        <div>
         {users.map (user =><div className="List" key={user.id}><div>{"Name: "}{user.name}</div><br></br><div>{"Username: "}{user.username}<br></br>{"Email: "}
         {user.email}<br></br>{"City: "}{user.address.city}<br></br>{"Company: "}{user.company.name}</div>
         </div>)}
        </div>
    );
}

export default UserList;
