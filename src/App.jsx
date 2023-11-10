import { useEffect, useState } from 'react';
import './App.css';
import User from './User/User';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  // console.log(users)
  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user ={name,email};
    console.log(user)
    // send data to server side
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      const newUsers = [...users, data];
      setUsers(newUsers);

      form.reset();
    })
  }

  return (
    <section>
      <div className='mb-10'>
      <h1 className='text-2xl font-bold text-center'>Users management system</h1>
      <h4 className='font-bold text-center mb-8'>Numbers of User: {users.length}</h4>
       <div className='max-w-5xl mx-auto'>
       <div className='grid md:grid-cols-2 gap-5'>
       {
         users.map(user =>  <User 
           key={user.id}
           user={user}
           ></User>)
       }
     </div>
       </div>
      </div>


      <div className='max-w-3xl mx-auto bg-purple-300 p-10'>
       <h3 className='text-xl font-bold text-center'>Add  User</h3>
          <form onSubmit={handleAddUser}>
            <input type="text" name="name" id="" className=' mb-5 w-full rounded' placeholder='name' required/>
            <br />
            <input type="email" name="email" id="" className=' mb-4 w-full rounded' placeholder='email' required />
            <br />
            <input className='bg-orange-500 w-full rounded' type="submit" value="Submit" />
          </form>
      </div>
      
    </section>
  )
}

export default App
