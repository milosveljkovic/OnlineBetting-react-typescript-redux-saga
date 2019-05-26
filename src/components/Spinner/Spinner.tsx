import React from 'react';

import {Spinner} from 'react-bootstrap';

export const MySpinner= ()=>{
    return (
        <div style={{ float:"left",width:"40%", padding:"10px"}}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}