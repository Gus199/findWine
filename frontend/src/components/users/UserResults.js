import {useEffect, useState} from 'react'

import UserItem from './UserItem'

function UserResults() {
    const [users, setUsers] =useState([])
    const [loading, setLoading] =useState(true)
    useEffect(() => {
        fetchUsers()
    }, [])

const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        headers: {
            Authorization: `toekn ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })
    const data = await response.json()
    setUsers(data)
    setLoading(false)
}

if (!loading) {
    return (
    //   <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
    //     {users.map((user) => (
    //       <UserItem key={user.id} user={user} />
    //     ))}
    //   </div>
      // end
      <div id="projects" class="container mt-5 pt-5">

      <h1 class="text-warning mb-3 pb-2">My Projects</h1>
       <div class="row">
  
         
       {users.map((user) => (
             <UserItem key={user.id} user={user} />
         ))}
          
       </div>
       </div>
    )
  } else {
    return   <h1>Spinner</h1>//<Spinner />
    
  }
}

export default UserResults