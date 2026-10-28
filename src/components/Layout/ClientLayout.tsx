"use client";
import React, { ReactNode } from 'react';
import Nav from '../shared/Nav';
import CardProvider from '@/context/CardProvider';
import Footer from '../shared/Footer';
import { ToastContainer } from 'react-toastify';

const ClientLayout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <CardProvider>
             <Nav/>
            {children}
            <Footer/>
            <ToastContainer />
            </CardProvider>
        </div>
    );
};

export default ClientLayout;