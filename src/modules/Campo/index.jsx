

export default function Campo(props){


    const aoDigitar = (evento) =>{
        props.aoAlterado(evento.target.value);
    }
    return (
        <>
            <div>
                <label>{props.label}</label>
                <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} name='{props.nome}' />
            </div>
        </>
    );
}