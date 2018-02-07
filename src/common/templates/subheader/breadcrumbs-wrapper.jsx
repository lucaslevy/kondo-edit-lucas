import React, { Component } from 'react'

/**
 * Breacrumbs wrapper
 */
class BreadcrumbsWrapper extends Component {
    render() {
        return (
            <ul className="m-subheader__breadcrumbs m-nav m-nav--inline">
                <li className="m-nav__item m-nav__item--home">
                    <a href="#" className="m-nav__link m-nav__link--icon">
                        <i className="m-nav__link-icon la la-home"></i>
                    </a>
                </li>
                {this.props.children}
            </ul>
        )
    }
}
export default BreadcrumbsWrapper