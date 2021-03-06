import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props =>{
    let nome=""
    let idade=0
    let nerd = true

    function fornecerInfo(nomeParam,idadeParam,nerdParam){
        nome=nomeParam;
        idade=idadeParam;
        nerd=nerdParam;
    }

    return(
        <div>
            <span>{nome}</span>
            <span>{idade}</span>
            <span>{nerd ? "Verdade" : "Falso"}</span>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>
        </div>
    )
}