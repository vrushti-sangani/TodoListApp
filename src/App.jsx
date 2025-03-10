import React, { useState } from "react";
import Todo from "./Todo";
const App = () => {

    const[inputList, setinputList] = useState("");  //for data input 
    const [items, setitems] = useState([]);   //for array to data store and show one by one in on click event

    const itemsEvent = (event) => {
        setinputList(event.target.value);
    }

    const listOfItems = () =>{
        setitems((oldvalue) => {
            return [...oldvalue, inputList]
        })
        setinputList("");
    }

    const deleteItem = (id) =>{
        console.log("deleted");
        setitems((oldvalue) => {
            return oldvalue.filter((arrElem, index) =>{
                return index !==id; 
            })
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1><br />
                    <input type="text" placeholder="Add a Items" 
                    value={inputList}
                    onChange={itemsEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/* <li>{inputList}</li>  */}
                        {items.map( (itemval, index) => {       //map method for array
                            return <Todo 
                            key={index} 
                            id={index}
                            text={itemval}
                            onSelect={deleteItem}
                            />;   //show values in list using array
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}


export default App;



