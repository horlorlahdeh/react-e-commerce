import React from 'react';

export default function Title ({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-center my-2 text-title">
                <h1 className="text-capitalize text-center font-weight-bold">
                    {name}<strong className="text-blue"> {title}</strong>
                </h1>
            </div>
        </div>
    )
}