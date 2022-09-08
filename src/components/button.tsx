import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

//o tipo do botão
type ButtonProps = {
    onClick: ()=>void; //retorna vazia
    texto:string;
    className:string;
}

export default function Button(props:ButtonProps){
    return(
        <button className={props.className} onClick={props.onClick}>{props.texto}</button>
    );  
}