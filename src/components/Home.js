import React, { Component } from 'react'
import Convert from './Convert'
import Content from './Content'
import { getCurrancy, convertCurrancy } from '../helper/converer';
import _ from 'lodash';
class Home extends Component {
    state = {
        codes: [],
        res: null
    }
    async componentDidMount() {
        const xx = await getCurrancy();
        const x = xx.filter((x) => x !== null);
        this.setState({
            codes: _.uniq(x)
        })
    }
    resualt = async (fromi, to, amont) => {
        const x = await convertCurrancy(fromi, to, amont)
        this.setState({
            res: x
        })
    }
    render() {
        return (
            <div className="Home">
                <Convert codes={this.state.codes} resualt={this.resualt} />
                <Content res={this.state.res} />
            </div>
        )
    }
}
export default Home