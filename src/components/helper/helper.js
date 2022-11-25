import {isUndefined} from "util";
import axios from 'axios';
import Cookies from "universal-cookie/es6/Cookies";
import app from "../../app.json";

const cookies = new Cookies();

export function calculoExracionSesion(){
    const now = new Date().getTime();
    const newDate = now + 60 + 30 + 1000;
    return new Date(newDate);
}

export function getSession(){
    return isUndefined(cookies.get('_s')) ? false : cookies.get('_s');
}


function renovarSesion(){
    const sesion = getSession();
    if(!sesion) window.location.href ="/login";


    cookies.set('_s', sesion, {
        path:'/',
        expires: calculoExracionSesion(),
    });
    return sesion;
}

export const request = {
    get: function (services) {
        let token =renovarSesion();
        return axios.get(`${app}${services}`,{
            headers:{
                Authorizacion: `Bearer ${token}`,
            }
        });
    },
};