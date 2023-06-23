import React from 'react'

const Jsx = () => {

  const jsx = <h1>Isso é JSX</h1>;

  console.log(jsx);

  const show = true;
  
  return (
    <>
    {jsx}

    {/* Isso é um comentário */}

    <p className="paragrafo" onClick={() => {}}>
      { show && <strong>Hello World!</strong> }
    </p>
    </>
  )
}
 

export default Jsx;