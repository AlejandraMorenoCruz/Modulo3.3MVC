import React from 'react';

class Registro extends React.Component {
  constructor(props){
    super(props);
    this.state={
      nombre:'Ale',
      apellido:'Moreno',
      correo: 'ale.mocr@gmail.com',
      }
  }
  actualizaNombre(event){

    let nombreNuevo = event.target.value;
    let nombreAnterior ={...this.state};
    nombreAnterior.nombre = nombreNuevo;
    this.setState(nombreAnterior)

  }

  actualizaApellido(event){

    let apellidoNuevo = event.target.value;
    let apellidoAnterior ={...this.state};
    apellidoAnterior.apellido = apellidoNuevo;
    this.setState(apellidoAnterior)

  }

  actualizaCorreo(event){

    let correoNuevo = event.target.value;
    let correoAnterior ={...this.state};
    correoAnterior.correo = correoNuevo;
    this.setState(correoAnterior)

  }

  enviar(event){

    alert
  }

  render() {
    return(
      <div>
        <div>
          Nombre
            <input
            value = {this.state.nombre}
            onChange = {(event) => this.actualizaNombre(event)}>
            </input>
        </div>
        <div>
          Apellido
            <input
            value = {this.state.apellido}
            onChange = {(event) => this.actualizaApellido(event)}>
            </input>
        </div>
        <div>
          Correo
            <input
            value = {this.state.correo}
            onChange = {(event) => this.actualizaCorreo(event)}>
            </input>
        </div>
        <div>
        <button onClick
        >Enviar
        </button>
        </div>
      </div>
    );
  }
}
export default Registro;
