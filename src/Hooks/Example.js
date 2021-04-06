import React, { useState, useEffect } from 'react';

const Example = () => {
  // Declara uma nova variável de state, que chamaremos de "count"
  const [name, setName] = useState("Nome de alguém");
  const [ user, setUser] = useState({
    name: "teste",
    email: "teste@gmail.com",
    job: "desenv",
    age: 22,
  })

  const funcao = () =>{
    console.log(name)
    setName('joao')
}

  const funcao2 = () =>{
    console.log(name)
    setName('maria')
  }

  useEffect(() => funcao2, [name && user]);

  const changeUserName = () => setUser({...user, name: 'larissa'})
  const changeEmail = () => setUser({...user, email: 'leticia@gmail.com'})
  const changeAge = () => setUser({...user, age:17})
  return (
    <div>
      <p>Hello, my name is {name}.</p>
      <p>My email is {user.email} </p>
      {user.age > 18 ? <p>{user.age}</p> : <p>You're a kid.</p>}
      <input onChange={(res)=> setUser({...user, name: res.target.value })}/>
      <button onClick={funcao}>change you name</button>
      <button onClick={changeEmail}>change you Email</button>
      <button onClick={changeAge}>change your age</button>
    </div>
  );
}

export default Example;