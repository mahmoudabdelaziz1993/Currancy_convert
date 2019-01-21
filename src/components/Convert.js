import React, { Component } from 'react';

class Convert extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            amount: " ",
            from: " ",
            to: " "
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.resualt(this.state.from
            , this.state.to, this.state.amount);
    }
    handleChange = (e) => {
        console.log(e.target.id + ':' + e.target.value);

        this.setState({
            [e.target.id]: e.target.value
        }
        )
        // console.log(this.state);
    }

    render() {

        const { codes } = this.props
        const list = codes.map((code) => {
            return (
                <option key={code} value={code}>{code}</option>
            )
        })
        return (
            <form onSubmit={this.handleSubmit} className="col s12">
                <div className="container center">
                    <div className="row">
                        <div className="input-feild col s3 ">
                            <label htmlFor="amount">Amount</label>
                            <input id="amount" min='1' type="number" className="validate" onChange={this.handleChange} value={this.state.amount}></input>

                        </div>


                        <div className="input-feild  col s3">
                            <label htmlFor="from">From</label>
                            <select id='from' className="from" onChange={this.handleChange}>
                                <option value={this.state.from} >Choose currancy code </option>

                                {list}
                            </select>


                        </div>

                        <div className="input-feild col s3">
                            <label htmlFor="to">To</label>
                            <select id="to" className="to" onChange={this.handleChange} >
                                <option value={this.state.to} >Choose currancy code </option>
                                {list}
                            </select>
                        </div>
                        <div className="input-feild col s3">
                            <br />
                            <button className="btn-floating btn-small waves-effect waves-light black">✔</button>
                        </div>




                    </div>
                </div>
            </form>
        )
    }
}
export default Convert