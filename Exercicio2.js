import React from "react";

const Exercicio2 = ({posts}) => {
    
  return (
    <div>
      <h1>Exercício-2</h1>
      {posts.map((posts) => (
        <div key={posts.id}>
          <h2>{posts.title}</h2>
          <p>{posts.content}</p>
        </div>
      ))}
    </div>
  );
};
export default Exercicio2;
