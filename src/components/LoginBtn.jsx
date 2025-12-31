'use client';
import React from 'react';
import {  signIn } from "next-auth/react"


const LoginBtn = () => {
    return (
        <button className='inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition' onClick={() => signIn()}>Sign in</button>
    );
};

export default LoginBtn;