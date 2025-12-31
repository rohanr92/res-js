"use client"
import { SessionProvider } from 'next-auth/react';
// import { Session } from 'puppeteer';
import React from 'react';

const LogProvider = ({children}) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default LogProvider;