'use client';
import { useParams } from 'next/navigation';

import React from 'react';

const MenuDetails = ({params}) => {
    const {id} = useParams();

    console.log(id);
    
    return (
        <div>
            <h2>Menu Item Details {id}</h2>
        </div>
    );
};

export default MenuDetails;