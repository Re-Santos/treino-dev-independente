import React from 'react'
import { useState } from 'react';

const HookExercicio = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 20 },
        { id: 4, name: 'David', age: 35 },
        ]);
    
        const filterIdade = users.filter((item) => item.age > 20);

    //maneira errada:
    // const idade=()=>{
    //     setUsers(users.age>25);
    // };
  return (
    <div>
        <h1>Hook Exercícios</h1>
       {filterIdade.map((item) => (
        <div key={item.id}>
          <li>{item.name}</li>
          <li>{item.age}</li>
          
        </div>
      ))}
    </div>
  )
}

export default HookExercicio
