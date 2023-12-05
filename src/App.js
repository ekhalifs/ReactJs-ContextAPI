import Navbar from './Components/Navbar';
import ThemeContextProvider from './Contexts/ThemeContext';
import TodoList from './Components/TodoList';
import './index.css';


import React from 'react';
import AuthContextProvider from './Contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <nav className="ui raised very padded text container segment ">
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <TodoList />
          </ThemeContextProvider>
        </AuthContextProvider>
      </nav>
    </div>
  );
}

export default App;
