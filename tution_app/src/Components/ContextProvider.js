import { View, Text } from 'react-native'
import React, {createContext, useState} from 'react';


export const AuthContext = createContext();

const ContextProvider = ({children}) => {
  const [user,setUser]=useState('');

  return (
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default ContextProvider;