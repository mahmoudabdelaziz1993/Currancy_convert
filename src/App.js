import React, { Component } from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Convert from './components/Convert'
import Content from './components/Content';
import { BrowserRouter, Route } from 'react-router-dom';
import {getCurrancy,convertCurrancy} from './helper/converer';
import _ from 'lodash';
class App extends Component {
  state = {
    codes: [],
    res:[]
  }
  async componentDidMount() {
    const xx = await getCurrancy();
    const x = xx.filter((x)=>x!== null); 
    this.setState({
      codes: _.uniq(x)
    })
  }
  resualt = async(fromi,to,amont)=>{
    const x = await convertCurrancy(fromi,to,amont)
    this.setState({
      res:x
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Convert codes={this.state.codes} resualt={this.resualt}/>
          <Content res ={this.state.res}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
