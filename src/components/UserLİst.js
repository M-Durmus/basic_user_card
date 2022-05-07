import axios from 'axios'
import React from 'react'
import { useState,useEffect} from 'react'
import SingleUser from './SingleUser'



//https://randomuser.me/api/?results=5

const UserLİst = () => {
 
  const [users,setUsers]=useState([])

const fetchUsers= async  () =>{
    const response = await axios.get("https://randomuser.me/api/?results=12")
    setUsers(response.data.results)
}

useEffect(()=>{
    fetchUsers()
},[])


  return (
 <div className="user-list">
    <ul>
        {users.map((user,idx) =>(
            <li> <SingleUser user={user} key={idx}/> </li>
        ))}
    </ul>

 </div>

  )
}

export default UserLİst