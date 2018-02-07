import React, { Component } from 'react'

/**
 * Breadcrumbs item
 */
class BreadcrumbsItem extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="m-nav__separator">-</li>
                <li className="m-nav__item">
                    <a href="" className="m-nav__link">
                        <span className="m-nav__link-text">{this.props.label}</span>
                    </a>
                </li>
            </React.Fragment>
        )
    }
}

export default BreadcrumbsItem