import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import axios from 'axios';


export default function Formulario(){
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [idade, setIdade] = useState('')
    const [isPending, setIsPending] = useState(false)

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        setIsPending(true);
        axios.post("http://localhost:8080/categoria/add", null ,{
            params:{
                "nome" : nome
            }
        } ).then((response) => {
            console.log(response.status);
            setIsPending(false);
        })
        .catch(err => console.warn(err));
    }

    return (
        <>
        <form onSubmit={aoSubmeter}>
            <Campo valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome: " nome = "nome" />
            <Campo valor={telefone} aoAlterado={valor => setTelefone(valor)}obrigatorio={true} label="Telefone: " nome = "telefone" />
            <Campo valor={idade} aoAlterado={valor => setIdade(valor)}obrigatorio={true} label="Idade: " nome = "idade" />
            {!isPending && <Botao>Cadastrar</Botao>}
            {isPending && <Botao>Aguardando...</Botao>}
        </form>
        </>
    );
}