import React from 'react'

export default props =>{
    return(
        <div>
            <span>{props.nome} </span>
            <span>{props.idade} </span>
            <span>{props.maiorDeIdade ? "Verdadeiro" : "Falso"}! </span>
        </div>
    )
}