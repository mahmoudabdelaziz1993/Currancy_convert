import React, { Component } from 'react';

class Convert extends Component {
    
    render() {
        const {codes} = this.props
        const list = codes.map((code)=>{
            return(
                <option key={code} value={code}>{code}</option>
            )
        })
        return (
            <form className="col s12">
                <div className="container">
                    <div className="row">
                    <div className="input-feild col s3 ">
                        <label htmlFor="amount">Amount</label>
                        <input  id="amount" type="number" className="validate"></input>
                        
                    </div>


                    <div className="input-feild  col s3">
                        <label htmlFor="from">From</label>
                        <select className="from" >
                            {list}
                        </select>


                    </div>

                    <div className="input-feild col s3">
                        <label htmlFor="to">To</label>
                        <select className="to">
                            {list}
                        </select>
                    </div>
                    <div className="input-feild col s3">
                        <br/>
                    <button className="btn-floating btn-small waves-effect waves-light black">✔</button>
                    </div>

                    


                </div>
                </div>
            </form>
        )
    }
}
export default Convert