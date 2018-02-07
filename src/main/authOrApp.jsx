import '../common/templates/dependecies'

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './app'
import DashboardAdmin from '../components/dashboard-admin/dashboard'
import SingupConfirmationMessage from './singupConfirmationMessage'

import Auth from '../components/auth/auth'
import { validateToken } from '../components/auth/auth-actions'

class AuthOrApp extends Component {
    componentWillMount() {
        //console.log(this.props.match.params.id)
        if (this.props.auth.user) {
            //console.log(this.props.auth)
            //this.props.validateToken(this.props.auth.user.data.token)
        }
    }

    render() {
        console.log('here!!!')
        const { afterSingup, user, validToken } = this.props.auth

        // console.log('#### USER ######')
        // console.log(user)

        // console.log('#### TOKEN ######')
        // console.log(validToken)

        if (afterSingup){
            return <SingupConfirmationMessage />
        }

        if (user) {
            // console.log(user)
            // console.log(validToken)
            //axios.defaults.headers.common['authorization'] = user.data.token
            if (user.isAdmin){
                // console.log('asfsdfafsdf')
                return <DashboardAdmin />
            }
            return <App />
        } else if (!user && !validToken) {
            return <Auth />
        } else {
            return false
        }
    }

}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)