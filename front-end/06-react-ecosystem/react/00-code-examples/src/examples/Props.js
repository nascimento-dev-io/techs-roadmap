import React from 'react'

// const App = () => {
//   return (
//     <div className="App">
      
//     </div>
//   )
// }


// Componente sem o uso de props - ( dados estáticos )

export const SayHello = () => {
  return (
    <div>
      <p>Olá Jorge</p>
    </div>
  )
}

// Utilizando Props para torna o componente reutilizavel e dinâmicolon

const SayHelloWithProps = ({ name = 'Desconhecido'}) => {
  return (
    <div>
      <p>Olá {name}</p>
    </div>
  )
}

// Adicionando o SayHelloWithProps ao App


const Parent = () => {
  const name = 'Jorge';
  return (
    <div className="App">
      <SayHelloWithProps name={name}/>
    </div>
  )
}

export default Parent;