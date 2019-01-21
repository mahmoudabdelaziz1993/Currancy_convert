import React from 'react';
const Content = ({res}) => {
    return (
        <div className="row center">
            <div className="col s12 m12">
                <div className="card black darken-9">
                    <div className="card-content white-text">
                        <span className="card-title">{res.result}</span>
                        <p>{res.pre}.</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content
