import React from "react";


const Exercicio3 = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filterpar = numeros.filter ((item)=>item % 2 === 0);

  console.log(filterpar);


  return (
    <div>
      <h1>Exercício-3</h1>
      {filterpar}
    </div>
  );
};

export default Exercicio3
