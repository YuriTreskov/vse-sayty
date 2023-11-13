import React, { createContext, useState } from 'react';

// Создайте контекст
const MyContext = createContext();

// Создайте провайдер контекста, который будет предоставлять переменную
const  MyContextProvider = React.memo(({ children,isDev }) => {
    console.warn("☢️ MyContextProvider")

    const [ modal, setModal ] = useState(false)
    const [ modalMenu, setModalMenu ] = useState(false)

  return (
    <MyContext.Provider value={{ modal, setModal ,modalMenu, setModalMenu  }}>
      {children}
    </MyContext.Provider>
  );
},[])

export { MyContext, MyContextProvider };