import React, { createContext, useState } from 'react'

const GetStyles = (mode) => {
  return mode ? {
    backgroundColor: "#1d1e1f",
    color: "white"
  } : null
}

const getStyle = (mode) => {
  return mode ? {
    borderBottom: "1px solid #2b2c2d"
  } : {
    borderBottom: "1px solid #edeef0"
  }
}


export const DarkModeContext = createContext();
const DarkModeContextProvider = ({ children }) => {
  const [mode, SetMode] = useState(false);
  const style = GetStyles(mode);
  const hrStyle = getStyle(mode)
  const handleMode = () => {
    SetMode(!mode)
  }

  console.log(mode)
  return (
    <DarkModeContext.Provider value={{ handleMode, style, mode, hrStyle }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeContextProvider