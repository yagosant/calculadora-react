import { type } from '@testing-library/user-event/dist/type';
import React, { ReactNode } from 'react';

type NumberProps ={
    children: ReactNode;
};

export default function Number(props:NumberProps){
    return <p>{props.children}</p>
}