import react, {Component} from 'react';
import {render} from 'react-dom';

class Todo extends Component{
    contructor(props){
        super(props);
        this.state = {
            todos:[{
                title: 'Comer Burguer',
                done: false
            }]
        };
    }
    render(){
        const { todos } = this.state;
       return ( <ul className= "todos">
            {todos.map((todo, idx) => {
                return <li key={idx}>{todo.title}</li> 
            })}
        </ul>
       );
    }
}
export default TodoList;