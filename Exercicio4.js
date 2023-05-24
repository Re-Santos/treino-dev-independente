import React from 'react'

const Exercicio4 = () => {
    const usuarios = [
        { id: 1, nome: 'Alice', idade: 25 },
        { id: 2, nome: 'Bob', idade: 17 },
        { id: 3, nome: 'Carol', idade: 20 },
        { id: 4, nome: 'David', idade: 16 }
        ];
    const pessoas = usuarios.filter((item)=>item.idade >= 20);
    console.log (pessoas)

  return (

    <div>
         <h1>Exercício-4</h1>
         {pessoas.map((item,index)=>(
            <div key={index}>
                {item.nome},
                {item.idade}
            </div>
         ))}
      
    </div>
  )
}

export default Exercicio4
