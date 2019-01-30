import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./component/Login";
import {TodoApp} from "./TodoApp";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <br/>
                <br/>
                <TodoApp/>
                <Login/>
            </div>
        );
    }

}

export default App;
