import React from 'react'

/**
 * Cards wrapper
 */
export default props => (
    <div className="m-content">
        <div className="m-portlet m-portlet--tabs">
            {props.children}
        </div>
    </div>
)