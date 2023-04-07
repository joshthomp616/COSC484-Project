import * as React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login /> } />
          <Route path="home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
