import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/LoginView/LoginComponent';
import HomeComponent from './Components/HomeView/HomeComponent';
import LoginDocenteComponent from './Components/LoginDocenteView/LoginDocenteComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<HomeComponent />} />
        <Route path='loginalu' element={<LoginComponent />} />
        <Route path='logindoc' element={<LoginDocenteComponent />} />
      </Routes>
    </>
  );
}

export default App;
