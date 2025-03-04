import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loadLoginState = async () => {
      const storedState = await AsyncStorage.getItem('isLoggedIn');
      if (storedState) {
        setIsLoggedIn(JSON.parse(storedState));
      }
    };
    loadLoginState();
  }, []);

  const updateLoginState = async (value) => {
    setIsLoggedIn(value);
    await AsyncStorage.setItem('isLoggedIn', JSON.stringify(value));
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, updateLoginState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);