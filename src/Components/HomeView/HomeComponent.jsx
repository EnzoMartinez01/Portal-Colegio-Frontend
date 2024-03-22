import React from 'react';
import { Link } from 'react-router-dom';
import '../../Static/Css/Home.css';
import HeaderComponent from '../HeaderComponent';

export default function HomeComponent() {
    return (
        <>
            <HeaderComponent />
            <br />
            <main>
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                    <div class="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 class="display-3 fw-bold">Buscas estudiar con los mejores?</h1>
                        <h3 class="fw-normal text-muted mb-3">No esperes más y matriculate con nosotros</h3>
                        <div class="d-flex gap-3 justify-content-center lead fw-normal">
                            <a class="icon-link" href="#">
                                Ver mas
                            </a>
                        </div>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </main>
            {/* <div className='content'>
                <div className='loginDocente'>
                    <div className='contentlogindoc'>
                        <div className='link'>
                            <Link to={"/logindoc"}>Ingresar Docente</Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className='loginAlumno'>
                    <div className='contentloginalu'>
                        <div className='link2'>
                            <Link to={"/loginalu"}>Ingresar Alumno</Link>
                        </div>
                    </div>

                </div>
            </div> */}
        </>
    )
}
