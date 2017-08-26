import React , {Component} from 'react';
import { render } from 'react-dom';
import './main.css';
import TodoList from './todoList.jsx';
// Arrow function () =>
// function() { return (); } 
// const App = () => (
//     <div className="app">
//         <h1> Hello World</h1>
//     </div>
// );

// Props == read-only
// State == {}

// contructor(props){
//     super(props);
//     this.state = {
//         mensagem: "Hello World!!"
//     };
// }

// //clickHandler(){
//     this.setState({mensagem: 'Hello Batuta!!'});
// }

class App extends Component {
    render(){
        return(
        <div className="app">
        <TodoList />
        <h1> {this.props.mensagem}</h1>
    </div> 
        )
    }
}
render (<App mensagem="Hello World!!"/>, document.getElementById('app'));