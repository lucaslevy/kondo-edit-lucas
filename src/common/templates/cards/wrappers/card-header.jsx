import React from 'react'

/**
 * Cards header wrapper
 */
export default props => (

    <div className="m-portlet__head">
        <div className="m-portlet__head-tools">
            <ul className="nav nav-tabs m-tabs m-tabs-line   m-tabs-line--left m-tabs-line--primary" role="tablist">
                {props.children}
            </ul>
        </div>
    </div>

)