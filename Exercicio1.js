import React from 'react'

const Exercicio1 = () => {
    const nomes = ['Alice', 'Bob', 'Carol', 'David'];
  return (
    <div>
      <h1>Exercício-1</h1>
      {nomes.map((item, index) => (
         <div key={index}>{item}</div>
      ))}
    </div>
  )
}

export default Exercicio1
