import React, { useRef } from 'react';
import { useReactToPrint }  from 'react-to-print'; 
import MyDiv from './components/child1';
import './App.css';

export default function App() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <MyDiv ref={componentRef}/>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

