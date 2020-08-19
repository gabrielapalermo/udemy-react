import './App.css';
import React from 'react';

import Card from './components/layout/Cards';

import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';



export default () => (
    <div className="App">
        <h1><strong>Fundamentos React</strong></h1>

        <div className="Cards">

        <Card titulo="#10 - comunicação INDIRETA" color="#A85C14">
        <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - COMUNICAÇÃO D I R E T A" color="#FD0404">
        <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - I M P O P A R / Usuário I N F O" color="#D024F3">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario = {{ nome: 'Gabriela'}}></UsuarioInfo>
        <UsuarioInfo usuario = {{ email: 'Gabriela@hotmail.com'}}></UsuarioInfo>
        <UsuarioInfo usuario = {{ }}></UsuarioInfo>
        </Card>
        
        <Card titulo="#07 - P A P E L A R I A" color="#336EFF">
        <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 - Repetição" color="#ff6666">
        <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com filhos" color="#33FFAF">
        <Familia sobrenome="Palermo">
        <FamiliaMembro nome="Antonio" />
        <FamiliaMembro nome="Rita" /> 
        <FamiliaMembro nome="Carlos Eduardo" />
        <FamiliaMembro nome="Gabriela" />  

        </Familia>
        </Card>
        
        <Card titulo="#04 - Desafio aleatório" color="#FA6900">
        <Aleatorio min={10} max={60}></Aleatorio>
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento></Fragmento>
        </Card>
        
        <Card titulo="#02 - Com parâmetro" color ="#E8B71A">
        <ComParametro 
        titulo="Situação do Aluno"
        aluno="Gabriela"
        nota={9.9}></ComParametro>
        </Card>

        <Card titulo="#01 - Primeiro componente" color="#588C73">
        <Primeiro></Primeiro>        
        </Card>
        </div>
    </div>
); 