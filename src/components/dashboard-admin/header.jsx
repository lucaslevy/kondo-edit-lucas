import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/**
 * Application imports
 */
import { logout } from '../auth/auth-actions'

/**
 * Material custom components
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import { deepOrange300, purple500 } from 'material-ui/styles/colors';


const style = { margin: 5 };


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { userMenu: false }
    }

    showUserMenu (){
        this.setState({ ...this.state, userMenu: !this.state.userMenu })
    }

    render () {

        const { userMenu } = this.state
        const { user } = this.props.auth.user 
        const { logout } = this.props

        console.log(logout)
        console.log(user)

        return (
            <MuiThemeProvider >
                <header className="m-grid__item    m-header " data-minimize-offset="200" data-minimize-mobile-offset="200">
                    <div className="m-container m-container--fluid m-container--full-height">
                        <div className="m-stack m-stack--ver m-stack--desktop">
                            <div className="m-stack__item m-brand  m-brand--skin-dark ">
                                <div className="m-stack m-stack--ver m-stack--general">
                                    <div className="m-stack__item m-stack__item--middle m-stack__item--center m-brand__logo">
                                        <a href="#" className="m-brand__logo-wrapper">
                                        {/* <img alt="" src="../../common/templates/assets/images/logo-80x51.png"/> */}
                                        </a>
                                    </div>
                                    <div className="m-stack__item m-stack__item--middle m-brand__tools">
        
                                        <a href="javascript:;" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                                            <span></span>
                                        </a>
        
                                        <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                            <span></span>
                                        </a>
        
                                        <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                                            <i className="flaticon-more"></i>
                                        </a>
        
                                    </div>
                                </div>
                            </div>
        
                            <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                                <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn"><i className="la la-close"></i></button>
                                <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general">
                                    <div className="m-stack__item m-topbar__nav-wrapper">
                                        <ul className="m-topbar__nav m-nav m-nav--inline">
                                            <li className={`${userMenu ? 'm-dropdown--open' : ''} m-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light`}  data-dropdown-toggle="click">
                                                <a href="#" className="m-nav__link m-dropdown__toggle">
                                                    <span className="m-topbar__userpic">
                                                        <Avatar onClick={() => this.showUserMenu()}>{user.name.substring(0,1)}</Avatar>
                                                    </span>
                                                </a>
                                                <div className="m-dropdown__wrapper">
                                                    <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                                    <div className="m-dropdown__inner">
                                                        <div className="m-dropdown__header m--align-center" >
                                                            <div className="m-card-user m-card-user--skin-dark">
                                                                <div className="m-card-user__pic">
                                                                </div>
                                                                <div className="m-card-user__details">
                                                                    <span className="m-card-user__name m--font-weight-500">{user.name}</span>
                                                                    <a href="" className="m-card-user__email m--font-weight-300 m-link">{user.email}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="m-dropdown__body">
                                                            <div className="m-dropdown__content">
                                                                <ul className="m-nav m-nav--skin-light">
                                                                    
                                                                    
                                                                    <li className="m-nav__separator m-nav__separator--fit">
                                                                    </li>
                                                                    <li className="m-nav__item">
                                                                        <a onClick={() => logout()} href="#" className="border-radius__2px btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        
            </MuiThemeProvider>
        )
    }
}

//export default Header

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header)

//Auth = reduxForm({ form: 'authForm' })(Auth)
//const mapStateToProps = state => ({ auth: state.auth })
//const mapDispatchToProps = dispatch => bindActionCreators({ login, register, changeLoadingMode },dispatch)
//export default connect(mapStateToProps, mapDispatchToProps)(Header)