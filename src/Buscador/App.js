import React from 'react';
import Search from './Search';
import List from './List';

class App extends React.Component{
        
    state = {
        Busqueda: '',
        Imagenes: []
    }

    consultarAPI = () => {
        fetch(`https://pixabay.com/api/?key=16452421-ab171263d1bd1ac0c8f585ca7&q=${this.state.Busqueda}`)
        .then(res => res.json())
        .then(result => this.setState({Imagenes: result.hits}))
    }

    consultarDatos = (Busqueda) => {
        this.setState({Busqueda}, 
            () => {this.consultarAPI()});
    }

    render(){
        return(
                <div>
                    <div>
                        <Search Consulta={this.consultarDatos}/>
                    </div> 
                    <div>
                        <List Imagenes={this.state.Imagenes}/>
                    </div>
                </div>
        );
    };
};

export default App;