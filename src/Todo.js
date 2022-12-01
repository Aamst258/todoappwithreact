import React from 'react';
import { useState } from 'react';



function Todo (){
const [items, setItems] = useState([]);
const [inputText, setInputText] = useState("");

function handleChangle(event){
const  newValue = event.target.value ;
  setInputText(newValue);
}   

function addItem(){
  setItems(item =>{
    return[...item,inputText]
  }) ;
  setInputText("");
}





  return (
   <div className="container">
     <div className="heading">
        <h1>To do List</h1>
    </ div>
    <div className="form">
      <input type="text" onChange={handleChangle} value={inputText} />
      <button onClick={addItem}>
        <span>Add</span>
        </button>
    </div>  
    <div className="array">
      <ul>
      {items.map(item => <li>{item}</li>)}
      
      </ul>
    </div>
    
    
    </div>
   



  );

}   
export default Todo ;