import React, { Component } from 'react'

/**
 * Card header item
 */
class CardHeaderItem extends Component {
    render () {
        return (
            <li className="nav-item m-tabs__item">
                <a className="nav-link m-tabs__link  active" data-toggle="tab" href="#m_builder_page" role="tab">{this.props.label}</a>
            </li>
        )
    }
}

export default CardHeaderItem