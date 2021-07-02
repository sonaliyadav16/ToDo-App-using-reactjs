import React, { useState } from "react";
import ToDoLists from './ToDoLists';

const App = () => {

    const [inputList,setInputList] = useState("");
    const [items,setItems]= useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return[...oldItems,inputList];

        });
        setInputList("");
    };
    const deleteItems = (id) =>{
        console.log("deleted");

        setItems((oldItems) =>{
            return oldItems.filter((arrElem,index) => {
              return index !==id;
            });
        });
    };
    return (
    <>
    <div className="main-div">
        <div className="center-div">
          <br/>
          <h1> ToDo List</h1>
          <br/>
          <input type="text"  placeholder="add a items"
          value={inputList}
          onChange={itemEvent}/>
           <button onClick={listOfItems}> + </button>
           <ol>

             {items.map((itemval,index) => {
                return <ToDoLists key={index} 
                id={index}
                text={itemval}
                onSelect={deleteItems}
                />;
             
              })}

           </ol>
        </div>
    </div>   
    </>
    );
};
export default App;