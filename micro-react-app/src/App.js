
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/index";
import List from "./pages/list";

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";

function App() {
  return (
    <div className="App">
      <Router basename={BASE_NAME}>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
      </Router>
    </div>
  );
}


export default App;
