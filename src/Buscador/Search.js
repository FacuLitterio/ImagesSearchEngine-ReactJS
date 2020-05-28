import React, {useState} from 'react';
import './StylesBuscador.css';

const Buscador = (props) => {
    
    const [busqueda, setBusqueda] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.Consulta(busqueda);
    }
    
    return(
        <div className="container imagen">
            <div className="row">
                <div className="col-10 buscador">
                    <input type="text" placeholder="Find Images..." value={busqueda} onChange={handleChange} className="form-control form-control-lg"/>
                </div>
                <div className="col-2 buscador">
                    <button type="button" className="btn btn-success btn-lg btn-block" onClick={handleSubmit}>Search</button>
                </div>
            </div>
        </div>
  );
};

export default Buscador;