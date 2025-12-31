import Form from '@/components/Form';
import React from 'react';

const UpdatePage = async ({ params}) => {
  const dataGet = await params;

  console.log("ID:", dataGet.id); 

  const response = await fetch(`http://localhost:3000/api/food/${dataGet.id}`);
  const data = await response.json();

  console.log("Fetched Data:", data);



  

  return (
    <div>
      <Form data={data}></Form>
    </div>
  );
};

export default UpdatePage;
