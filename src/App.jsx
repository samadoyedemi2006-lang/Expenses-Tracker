import { useState, useEffect } from "react";
import InputValidation from "./ExpensesInput";
import ListOfExpenses from "./ListOfExpenses";
import { Routes,Route } from "react-router";
import Home from "./Homepage";

function App() {

  const[validate,setValidate]=useState({
    name:'',
    number:'',
    date:''
  })

  const[error,setError]=useState('')

  
  const[list,setList]=useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(list));
  }, [list]);


  function ClickHandle(){
    setList(list => [...list, validate]);
    setValidate({ name: "", number: "",date:"" });
     alert('Your Expenses was submit successfully ✔') 
  }

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='form' element={
        <InputValidation 
          addOn={ClickHandle} 
          validate={validate} 
          setValidate={setValidate} 
          error={error} 
          setError={setError}
        />
      }/>
      <Route path='list' element={
        <ListOfExpenses 
          list={list} 
          setList={setList}
        />
      }/>
    </Routes>
  );
}

export default App;
