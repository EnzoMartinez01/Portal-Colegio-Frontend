import React, { useEffect, useState } from 'react';
import '../../Static/Css/Login.css';
import { listAlumnos } from '../../Helper/AlumnoService';

export default function LoginComponent() {
  const [alumnos, setAlumnos] = useState([]);
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getAllAlumnos();
  }, []);

  const getAllAlumnos = () => {
    listAlumnos()
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setAlumnos(response.data.data);
        } else {
          console.error('Los datos de los alumnos no son un array:', response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error al obtener los alumnos:', error);
      });
  };

  const handleLogin = () => {
    // Verificar si el DNI y la contraseña coinciden con los datos de los alumnos
    const alumno = alumnos.find((alumno) => alumno.alumno_dni === dni && alumno.alumno_dni === password);
    if (alumno) {
      // Acceso concedido, puedes redirigir o realizar alguna acción aquí
      console.log('Acceso concedido');
    } else {
      // Acceso denegado
      console.log('Acceso denegado');
    }
  };

  return (
    <>
        <div className='section1'>
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

            <button type="submit" className="button-sesion" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </div>
        </div>
        <br />
        <div className='section2'>
          <p>SITIO WEB BY Enzo Martinez</p>
          <p>&copy; 2024 TODOS LOS DERECHOS RESERVADOS</p>
        </div>
    </>
  );
}
