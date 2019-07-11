import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from './../helper';

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = (data) => {

    

    const {marca, plan, year} = data;

    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de years 
    const diferencia = obtenerDiferenciaAnio(year);

    console.log(`La diferencia es ${diferencia}`)
    
    // Por cada years restar el 3%
    resultado -= ((diferencia * 3) * resultado) / 100;

    // Americano 15%, Asiatico 5%, Europeo 30%
    resultado = calcularMarca(marca) * resultado;

    // El plan
    let incrementoPlan = obtenerPlan(plan);

    // resultado final
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    // Crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year,
    }
    
    // Retornando al state
    this.setState({
      resultado: resultado,
      datos: datosAuto
    })

  }

  render(){
    return (
      <div className="contenedor">
        <Header 
          titulo="Cotizador de Seguros de Auto"
        />
  
        <div className="contenedor-formulario"> 
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />


        <Resumen 
          datos={this.state.datos}
          resultado={this.state.resultado}

        />

        <Resultado
          resultado={this.state.resultado}
        />

        </div>

      </div>
    );
  }
}

export default App;
