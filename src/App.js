import { useContext, useEffect } from 'react';
import './App.css';
import { DarkModeContext } from './ContextApi/DarkModeContext';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Routes/Footer';
import Navbar from './Routes/Navbar';


const getStyle = (mode) => {
  
  
}

function App() {
  const { mode } = useContext(DarkModeContext)
  const getStyle = (mode) => {
    return mode ? {
        backgroundColor: 'black',
        color: "white"
    } :{
        backgroundColor: '#f9f9fb',
    }
}

const newStyle = getStyle(mode)
  return (
    <div className="App" style={newStyle}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

