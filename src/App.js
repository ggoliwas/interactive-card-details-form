
import React, { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import ResultForm from "./components/ResultForm";

const App = () => {

    const [inputData, setInputData] = useState({ owner: null, number: null, mm: null, yy: null, cvc: null });
    const [validate, setValidate] = useState(0);

    const handleInput = (e) => {
        if (e.target.name === "number" && e.target.value) {
            e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();  
        }
        if (e.target.name === "mm" || e.target.name === "yy" || e.target.name === "cvc" ) {
            e.target.value = e.target.value.replace(/[^0-9,.]/g, '');
            if(e.target.name === "mm" && e.target.value > 12)  e.target.value = 12;
        }
        setInputData({...inputData, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => {
        setValidate(1)
    }

    const resetForm = () => {
        setInputData({ owner: null, number: null, mm: null, yy: null, cvc: null });
        setValidate(0);
    }

  return (
    <div className="wrapper">
      <Header
        inputData={inputData}
      />
      {!validate 
       ? <Form handleInput={handleInput} handleSubmit={handleSubmit} />
       : <ResultForm resetForm={resetForm}/>
      }
    </div>
  );
}

export default App;
