// App.js
import React, { useState } from 'react';
import Login from './pages/login';
import Register from './pages/register';
import MainPage from './pages/mainpage';
import { Route, Routes , BrowserRouter} from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
         token ? <>
          <MainPage token={token}/>
         </>: <Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
