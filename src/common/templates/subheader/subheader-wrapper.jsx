import React, { Component } from 'react'

/**
 * Subheader title and breadcrumbs
 */

class SubheaderWrapper extends Component {
    render() {
        return (
            <div className="m-subheader ">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h3 className="m-subheader__title m-subheader__title--separator">{this.props.title}</h3>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default SubheaderWrapper
