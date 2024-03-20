import React, { useEffect, useState } from 'react';
import '../../Static/Css/Login.css';
import { listAlumnos } from '../../Helper/AlumnoService';

export default function LoginComponent() {
  const [alumnos, setAlumnos] = useState([]);
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('alumno');

  useEffect(() => {
    getAllAlumnos();
  }, []);

  const getAllAlumnos = () => {
    listAlumnos()
      .then((response) => {
        setAlumnos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = () => {
    // Verificar si el DNI y la contraseña coinciden con los datos de los alumnos
    const alumno = alumnos.find((alumno) => alumno.alumno_dni === dni && alumno.alumno_dni === password && rol === 'alumno');
    // Verificar si el DNI y la contraseña coinciden con los datos de los docentes
    const docente = alumnos.find((docente) => docente.alumno_dni === dni && docente.alumno_dni === password && rol === 'docente');
    
    if (alumno) {
      // Redireccionar al área de alumno
      console.log('Redirigir al área de alumno');
    } else if (docente) {
      // Redireccionar al área de docente
      console.log('Redirigir al área de docente');
    } else {
      // Acceso denegado
      console.log('Acceso denegado');
    }
  };

  return (
    <>
      <div className="menu">
        <img src="" alt="logo" />
        <input
          type="text"
          className="form-control"
          placeholder="Usuario"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="alumno">Alumno</option>
          <option value="docente">Docente</option>
        </select>

        <button type="submit" className="button-sesion" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </>
  );
}
