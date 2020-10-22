import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./pages/home/index";
import Head from "./head";
import Generator from "./pages/generator/index";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App ">

                    <Head />
                    <Route path="/" exact component={Home}/>
                    <Route path="/generator" exact component={Generator}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
