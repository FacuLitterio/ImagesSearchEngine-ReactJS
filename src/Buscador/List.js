import React from 'react';
import Imagen from './Imagen';

const List = (props) => {
    return(
        <div className="container-fluid ml-5">
            <div className="row mt-5">
                {props.Imagenes.map(Card => <Imagen key={Card.id} Miniatura={Card.previewURL} MeGusta={Card.likes} Vistas={Card.views} VerImagen={Card.largeImageURL}/>)}
            </div>
        </div>
    );
};

export default List;