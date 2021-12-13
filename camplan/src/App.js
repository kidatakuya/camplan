import { Home } from './components'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './ress.scss'

export const UserCount = React.createContext()

function App() {

  return (
    <>
      <Routes>
      
        <Route path="/" element={<Home />} />
      </Routes>
    </>
    
  );
}

export default App;
