import React, { createContext, useState } from 'react';
import { Messages } from '../components/enums';
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [number, setNumber] = useState(null);
  const [message, setMessage] = useState('');

  const checkNumber = (attempt) => {
    switch (true) {
      case (Number(attempt) === Number(number)):
        setMessage(Messages.Success);
        break;
      
      case (attempt > number):
        setMessage(Messages.Smaller);
        break;
      
      case (attempt < number):
        setMessage(Messages.Bigger);
        break;
      
      default:
        break;
    }
  }

  const updateNumber = () => {
    fetch('/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ randomNumber: String(Math.floor(Math.random() * 100) + 1) })
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          setNumber(response.data.randomNumber);
        } else {
          console.log('Error updating number:', response.error);
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  return (
    <Context.Provider value={{ number, setNumber, message, setMessage, checkNumber, updateNumber }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };