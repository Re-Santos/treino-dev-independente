import React from 'react'

const Exercicio5 = () => {
    const produtos = [
        { id: 1, nome: 'Camiseta', preco: 30 },
        { id: 2, nome: 'Calça', preco: 70 },
        { id: 3, nome: 'Tênis', preco: 100 },
        { id: 4, nome: 'Boné', preco: 20 }
        ];
    
    const product = produtos.filter((item)=>item.preco > 30);
    console.log(product)
    
  return (
    <div>
        <h1>Exercício-5</h1>
        {product.map((item) => (
        <div key={item.id}>
          <li>
            {item.nome} ,
            {item.preco}
          </li>

        </div>
      ))}
      
    </div>
  );
};

export default Exercicio5
