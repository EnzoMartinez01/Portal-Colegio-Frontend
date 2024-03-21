import React from 'react';
import { Link } from 'react-router-dom';
import '../../Static/Css/Home.css';
import docentes from '../../Static/Images/docentes.jpg';
import alumnos from '../../Static/Images/alumnos.jpg';

export default function HomeComponent() {
    return (
        <>
            <div className='content'>
                <div className='loginDocente'>
                    <div className='contentlogindoc'>
                        <img src={docentes} alt="docentes" />
                        <Link to={"/logindoc"}>Ingresar Docente</Link>
                    </div>
                </div>
                <br />
                <div className='loginAlumno'>
                    <div className='contentloginalu'>
                        <img src={alumnos} alt="allumnos" />
                        <Link to={"/loginalu"}>Ingresar Alumno</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
