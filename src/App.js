import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './Components/LoginView/LoginComponent';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<LoginComponent />} />
      </Routes>
    </>
  );
}

export default App;
