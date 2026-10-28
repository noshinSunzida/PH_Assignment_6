"use client";
import React, { ReactNode } from 'react';
import Nav from '../shared/Nav';
import CardProvider from '@/context/CardProvider';

const ClientLayout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <CardProvider>
             <Nav></Nav>
            {children}
            </CardProvider>
        </div>
    );
};

export default ClientLayout;