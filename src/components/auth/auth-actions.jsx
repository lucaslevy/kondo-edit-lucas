import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../../config/consts'

import { getTranslation } from '../../common/translations/translation'

export function login(values) {
    console.log(values)
    return submit(values, `${consts.API_URL}/login`, 'login')
}

export function register(values) {
   
    if (!values.agree){
       toastr.error('Erro!', 'Você precisa aceitar os termos e condições.')
   
       return dispatch => {
            dispatch([
                changeLoadingMode(true)
            ])
       } 
    }
   
    return submit(values, `${consts.API_URL}/register`, 'register')
}

export function logout() {
    return { type: 'USER_LOGOUT', payload: false }
}

function submit(values, url, formType = false) {
    console.log(url)

    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                //console.log(resp)
                if (formType === 'register'){
                    dispatch([
                        changeLoadingMode(true),
                        showSingUpConfirmationMessage()
                    ])
                }

                if (formType === 'login'){
                    dispatch([
                        changeLoadingMode(true),
                        getUserInfo(resp.data)
                    ])
                }
                
            })
            .catch(e => {

                let errors = IsJsonString(e.response.data.error) ? JSON.parse(e.response.data.error) : e.response.data.error

                if (typeof errors === 'object') {
                    for (let [key, value] of Object.entries(errors)) {

                        for (let message of value){
                            toastr.error('Erro!', getTranslation(message))
                        }

                    }
                } else {
                    toastr.error('Erro!', getTranslation(errors))
                }

                dispatch([
                    changeLoadingMode(true),
                    {
                        type: 'SUBMIT_ERRORS',
                        payload: {
                            company_name: errors.company_name ? getTranslation(errors.company_name.shift()) : false,
                            name: errors.name ? getTranslation(errors.name.shift()) : false,
                            email: errors.email ? getTranslation(errors.email.shift()) : false,
                            password: errors.password ? getTranslation(errors.password.shift()) : false,
                            password_confirmation: errors.password_confirmation ? getTranslation(errors.password_confirmation.shift()) : false
                        }
                    }
                ])

            })
    }
}

export function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${consts.API_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}

/**
 * Control of loading icons
 */
export function changeLoadingMode(value) {
    return {
        type: 'CONTROL_LOADING',
        payload: !value
    }
}

/**
 * Show sing up confirmation message
 */
function showSingUpConfirmationMessage (){
    return {
        type: 'SHOW_SINGUP_CONFIRMATION_MESSAGE',
        payload: true
    }
}


export function getUserInfo(data) {

    axios.defaults.headers.common['authorization'] = `Bearer ${data.data.token}`

    return dispatch => {
        axios.get(`${consts.API_URL}/users/me`)
            .then(resp => {
                console.log(resp.data.data)
                dispatch({ type: 'USER_FETCHED', payload: resp.data.data })
            })
            .catch(e => {
                console.log(e)
            })
    }


}