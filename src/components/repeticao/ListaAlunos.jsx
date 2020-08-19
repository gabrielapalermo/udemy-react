import React from 'react'
import alunos from '../../data/alunos'

export default (props) => {
    const li1 = (
                <li key={alunos.id}>
                    {alunos[0].id}) {alunos[0].nome} - {alunos[0].nota} 
                </li>
    );

    const lis = alunos.map((aluno) =>{
        return <li>{aluno.id}) <strong>Aluno:</strong> {aluno.nome} - <strong>nota:</strong> {aluno.nota}</li>
    })

    return(
            <div>
                <ul style={{listStyle: 'none'}}>
                    {lis}
                </ul>
            </div>
        )
}