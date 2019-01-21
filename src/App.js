import React, { Component } from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Convert from './components/Convert'
import { BrowserRouter, Route } from 'react-router-dom';
import {getCurrancy} from './helper/converer';
import _ from 'lodash';
class App extends Component {
  state = {
    codes: []
  }
  async componentDidMount() {
    const xx = await getCurrancy();
    const x = xx.filter((x)=>x!== null); 
    this.setState({
      codes: _.uniq(x)
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Convert codes={this.state.codes}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
