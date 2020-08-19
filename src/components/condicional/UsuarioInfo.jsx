import React from 'react'
import If from './If'


export default props=>{
    const usuario = props.usuario || {}
    return(
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vind@,<strong>{usuario.nome}!!!</strong>
            </If>

            <If test={!usuario || !usuario.nome}>
                Seja bem vind@,<strong>usuári@ anônim@!!!</strong>
            </If>
        </div>
    )
}