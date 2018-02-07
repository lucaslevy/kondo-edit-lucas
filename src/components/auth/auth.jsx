import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, register, changeLoadingMode } from './auth-actions'
import ToastMessage from '../../common/templates/toastr-messages/messages'

//import TranslationErros from '../../common/translations/errors/pt_br'

import TextFieldMaterial from '../../common/templates/forms/textfield-material'

class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = { loginMode: true, registerMode: false, recoverPassMode: false }
    }

    changeMode(mode) {
        switch (mode) {
            case 'login':
                this.setState({ loginMode: true, registerMode: false, recoverPassMode: false })
                break

            case 'register':
                this.setState({ loginMode: false, registerMode: true, recoverPassMode: false })
                break

            case 'recover':
                this.setState({ loginMode: false, registerMode: false, recoverPassMode: true })
                break

        }
    }

    onSubmit(values, mode) {
        const { login, register } = this.props

        switch (mode) {
            case 'login':
                login(values)
                break

            case 'register':
                register(values)
                break

            case 'recover':
                
                break

        }
    }

    componentWillMount() {

    }

    render() {
        const { loginMode, registerMode, recoverPassMode } = this.state
        const { handleSubmit, changeLoadingMode } = this.props

        console.log('##### - LOADING NO RENDER - ########')
        console.log(this.props.auth.loading)

        return (
            <div className="m-grid m-grid--hor m-grid--root m-page height-full">
                <div className="m-login m-login--singin  m-login--5" id="m_login" >
                    <div className="m-login__wrapper-1 m-portlet-full-height">
                        <div className="m-login__wrapper-1-1">
                            <div className="m-login__contanier">
                                <div className="m-login__content">
                                    <div className="m-login__logo">
                                        <a href="#"></a>
                                    </div>
                                    <div className="m-login__title">
                                        <h3>
                                            JOIN OUR GREAT METRO COMMUNITY GET FREE ACCOUNT
									</h3>
                                    </div>
                                    <div className="m-login__desc">
                                        Amazing Stuff is Lorem Here.Grownng Team
								</div>
                                    <div className="m-login__form-action">

                                        <a href="javascript:;" onClick={() => this.changeMode('register')} id="" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">
                                            Cadastre-se agora!
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="m-login__border">
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="m-login__wrapper-2 m-portlet-full-height">
                        <div className="m-login__contanier">
                            <div className={loginMode ? 'm-login__signin animated flipInX' : 'display-none'}>
                                {/* <div className="m-login__signin"> */}
                                <div className="m-login__head">
                                    <h3 className="m-login__title">
                                        Entre com sua conta
								</h3>
                                </div>
                                <form className="m-login__form m-form" onSubmit={handleSubmit(v => this.onSubmit(v, 'login'))}>
                                    <div className="form-group m-form__group">
                                        <Field component={TextFieldMaterial} errorText={this.props.auth.formErrors.email} type='input' className="form-control m-input" name='email' placeholder='E-mail' />
                                    </div>
                                    <div className="form-group m-form__group">

                                        <Field className="form-control m-input m-login__form-input--last" component={TextFieldMaterial} errorText={this.props.auth.formErrors.password} type="Password" placeholder="Senha" name="password" />
                                    </div>
                                    <div className="row m-login__form-sub">
                                        <div className="col m--align-left">
                                            <label className="m-checkbox m-checkbox--focus">
                                                <input type="checkbox" name="remember" />
                                                Lembre-me
											<span></span>
                                            </label>
                                        </div>
                                        <div className="col m--align-right">
                                            <a href="javascript:;" onClick={() => this.changeMode('recover')} id="m_login_forget_password" className="m-link">
                                                Esqueceu a senha?
										</a>
                                        </div>
                                    </div>
                                    <div className="m-login__form-action">
                                        <button id="m_login_signin_submit"
                                            onClick={() => changeLoadingMode(this.props.auth.loading)}
                                            className={this.props.auth.loading
                                                ? 'btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-loader m-loader--right m-loader--light'
                                                : 'btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air'
                                            }>
                                            Entrar
									    </button>
                                    </div>
                                </form>
                            </div>
                            <div className={registerMode ? 'm-login__signup animated flipInX' : 'display-none'}>
                                {/* <div className="m-login__signup"> */}
                                <div className="m-login__head">
                                    <h3 className="m-login__title">
                                        Cadastro
								</h3>
                                    <div className="m-login__desc">
                                        Preencha seus dados para criar sua conta:
								</div>
                                </div>
                                <form className="m-login__form m-form" onSubmit={handleSubmit(v => this.onSubmit(v, 'register'))}>
                                    <div className="form-group m-form__group">
                                        <Field component={TextFieldMaterial} errorText={this.props.auth.formErrors.company_name} type='input' className="form-control m-input" name='company_name' placeholder='Nome da empresa' />
                                    </div>
                                    <div className="form-group m-form__group">
                                        <Field component={TextFieldMaterial} errorText={this.props.auth.formErrors.name} type='input' className="form-control m-input" name='name' placeholder='Nome completo' />
                                        {/* <input className="form-control m-input" type="text" placeholder="Fullname" name="fullname" /> */}
                                    </div>
                                    <div className="form-group m-form__group">
                                        <Field component={TextFieldMaterial} errorText={this.props.auth.formErrors.email} type='input' className="form-control m-input" name='email' placeholder='E-mail' />
                                        {/* <input className="form-control m-input" type="text" placeholder="Email" name="email" /> */}
                                    </div>
                                    <div className="form-group m-form__group">
                                        <Field component={TextFieldMaterial} errorText={this.props.auth.formErrors.password} className="form-control m-input" type="Password" placeholder="Senha" name="password" />
                                        {/* <input className="form-control m-input" type="password" placeholder="Password" name="password" /> */}
                                    </div>
                                    <div className="form-group m-form__group">
                                        <Field component={TextFieldMaterial} className="form-control m-input m-login__form-input--last" type="Password" placeholder="Confirme a senha" name="password_confirmation" />
                                        {/* <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="password_confirmation" /> */}
                                    </div>
                                    <div className="m-login__form-sub">
                                        <label className="m-checkbox m-checkbox--focus">
                                            <Field name="agree" component='input' type="checkbox"/>

                                            {/* <input type="checkbox" name="agree" /> */}
                                            Eu aceito os&nbsp;
										<a href="#" className="m-link m-link--focus">
                                            termos e condições.
										</a>
                                            .
										<span></span>
                                        </label>
                                        <span className="m-form__help"></span>
                                    </div>
                                    <div className="m-login__form-action">
                                        
                                        <button id="m_login_signup_submit" 
                                            onClick={() => changeLoadingMode(this.props.auth.loading)}
                                            className={this.props.auth.loading
                                                ? 'btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-loader m-loader--right m-loader--light'
                                                : 'btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air'
                                            }>
                                            Cadastrar
									    </button>
                                        <a href="javascript:;" onClick={() => this.changeMode('login')} id="m_login_forget_password" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">
                                            Cancelar
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div className={recoverPassMode ? 'm-login__forget-password animated flipInX' : 'display-none'} >
                                <div className="m-login__head">
                                    <h3 className="m-login__title">
                                        Esqueceu sua senha?
								</h3>
                                    <div className="m-login__desc">
                                        Insira seu e-mail para redefinir a sua senha:
								</div>
                                </div>
                                <form className="m-login__form m-form" action="">
                                    <div className="form-group m-form__group">
                                        <input className="form-control m-input" type="text" placeholder="E-mail" name="email" id="m_email" />
                                    </div>
                                    <div className="m-login__form-action">
                                        <button id="m_login_forget_password_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
                                            Redefinir senha
									</button>
                                        <a href="javascript:;" onClick={() => this.changeMode('login')} id="m_login_forget_password" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">
                                            Cancelar
                                        </a>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastMessage />
            </div>
        )
    }
}

//const mapStateToProps = state => ({ summary: state.dashboard.summary })
//const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
//export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
//export default Auth

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ login, register, changeLoadingMode },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Auth)