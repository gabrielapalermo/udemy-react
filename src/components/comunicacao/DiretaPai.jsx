import React from 'react'
import DiretaFilho from './DiretaFilho'
export default props =>{
    return(
        <div>
            <DiretaFilho nome="Carlos" idade={20} maiorDeIdade={true}></DiretaFilho>
            <DiretaFilho nome="Gabriela" idade={13} maiorDeIdade={false}></DiretaFilho>
        </div>
    )
}