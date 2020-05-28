import React from 'react';
import './StylesBuscador.css';

const Imagen = (props) => {
    return(
        <div className="card col-2 bg-dark text-light m-3">
            <img className="card-img-top" src={props.Miniatura} height="200px" alt="Frula"/>
            <div className="card-body">
                <p>Me Gusta: <button type="button" className="btn btn-light">{props.MeGusta}</button></p>
                <p>Vistas: <button type="button" className="btn btn-light">{props.Vistas}</button></p>
            </div>
            <a href={props.VerImagen} type="button" target="_blank" className="btn btn-info">Ver Imagen</a>
        </div>
    );
};

export default Imagen;