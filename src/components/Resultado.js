import { calcularMarca } from "../helper";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import React, {Component} from 'react';

class Resultado extends Component{


    // mostrarResumen = () =>{
    //     const resultado = this.props.resultado;

    //     if(!resultado) return 'Elige Marca, A*o y Tipo de Seguro';

    //     return `$ ${resultado}`;
    // }

    render(){
    const resultado = this.props.resultado;

        return(
            <div className="gran-total">
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition className="resultado" key={resultado} timeout={{ enter: 500, exit: 500 }}>
                        <span>{resultado}</span>
                    </CSSTransition>
                </TransitionGroup>
                
            </div>
        )
    }
}

export default Resultado;