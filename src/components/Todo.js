import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import "./"


class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            etxt : "hello state"
        }
    }
    render(){
        return (
        <header>
            <form className="todo-form">
                <input type="text" placeholder="Enter your Todo..."></input>
                <button type="submit">Add</button>
            </form>
        </header>
        )
    }
}

export default Todo;