import React from 'react';
import _ from 'lodash';
const Content = ({ res }) => {
    if (!_.isNull(res)) {
        return (
            <div className="row center">
                <div className="col s12 m12">
                    <div className="card black darken-9">
                        <div className="card-content white-text">
                            <span className="card-title">{res.result}</span>
                            <p>{res.pre} .</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return(
        <div className="row"></div>
    )
}
export default Content
