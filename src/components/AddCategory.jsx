import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  const [inputvalue, setinputvalue] = useState('')

  const oninputchnage = (event) => {
//console.log(event.target.value)
    setinputvalue(event.target.value);
  }
   const onSubmit = (event) => {
      event.preventDefault();
      if (inputvalue.trim().length<=1)return; //esto hace que si no escribo nada con 1 caracter o menos vuelve y no ejeftuta el enter
      // console.log(inputvalue);
      //setcategories(categories => [inputvalue,...categories]);
      onNewCategory(inputvalue.trim());
      setinputvalue('');
  }
    return (
      <form onSubmit={ onSubmit  }  >
        <input
    type="text"
    placeholder='buscar gift'
    value={inputvalue}
    onChange= {oninputchnage}
    />
    </form>
  )
}
