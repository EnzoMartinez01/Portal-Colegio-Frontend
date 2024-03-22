import React from 'react'
import '../Static/Css/Header.css'

export default function HeaderComponent() {
    return (
        <>
            <header>
                <div className='logo'>
                    <img src="" alt="logo" />
                </div>
                <div className='list'>
                    <ul class="nav nav-underline">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cursos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ubicanos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='#'>Iniciar Sesión</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
