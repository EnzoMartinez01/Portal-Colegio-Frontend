import axios from "axios";

const ALUMNOS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/portal/alumnos';

export const listAlumnos = () => {
    return axios.get(ALUMNOS_BASE_REST_API_URL + '/getalumnos')
};

export const createAlumno = (alumnos) => {
    return axios.post(ALUMNOS_BASE_REST_API_URL + '/createalumno', alumnos)
};

export const updateAlumno = (alumnos) => {
    return axios.put(ALUMNOS_BASE_REST_API_URL + '/updatealumno', alumnos)
};

export const deleteAlumno = (alumno_id) => {
    return axios.delete(ALUMNOS_BASE_REST_API_URL + '/deletealumno/' + alumno_id)
};