import '../../design/myDesign.css'

import React from 'react';

import {Spinner} from 'react-bootstrap';

export const MySpinner= ()=>{
    return (
        <div className="contentContainer">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}