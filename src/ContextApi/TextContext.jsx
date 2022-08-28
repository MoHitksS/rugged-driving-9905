    import React, { createContext } from 'react'
    
    export const TextContext = createContext();
    const TextContextProvider = ({children}) => {
      return (
        <TextContext.Provider>
            {children}
        </TextContext.Provider>
      )
    }
    
    export default TextContextProvider