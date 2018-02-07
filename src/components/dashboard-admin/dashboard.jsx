import React, { Component } from 'react'
import Header from './header'

/**
 * Layout and templates imports
 */
import ContentGrid from '../../common/templates/grid/grid'
import SubHeaderWrapper from '../../common/templates/subheader/subheader-wrapper'
import BreadcrumbsWrapper from '../../common/templates/subheader/breadcrumbs-wrapper'
import BreadcrumbsItem from '../../common/templates/subheader/breadcrumbs-item'
import CardWrapper from '../../common/templates/cards/wrappers/card'
import CardWrapperHeader from '../../common/templates/cards/wrappers/card-header'
import CardWrapperContent from '../../common/templates/cards/wrappers/card-content'
import CardWrapperFooter from '../../common/templates/cards/wrappers/card-footer'
import CardHeaderItem from '../../common/templates/cards/card-header'
import ScriptsBundle from '../../common/js/scripts.bundle.js'
import StyleBundle from '../../common/css/style.bundle.css'

/**
 * Component Dashboard Admin
 */
class Dashboard extends Component {

    render() {
        return (
            <div className="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
                <div className="m-grid m-grid--hor m-grid--root m-page">
            
                    <Header />
                </div>

                <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body" >

                    <div className='m-grid__item  m-aside-left m-aside-left--skin-dark'>
                        <div id="m_ver_menu"
                            className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark m-aside-menu--dropdown"
                            data-menu-vertical="true"
                             data-menu-dropdown="true" data-menu-scrollable="true" data-menu-dropdown-timeout="500"
                        >
                            <div className='mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside'>
                                <div className='mCSB_container mCS_y_hidden mCS_no_scrollbar_y'>

                                    <ul className='m-menu__nav m-menu__nav--dropdown-submenu-arrow'>
                                    

{/* MENU DASHBOARD */}
                                        <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                                            <a href="index.html" className="m-menu__link ">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-area-chart"></i>
                                                <span className="m-menu__link-text">Dashboard</span>
                                            </a>
                                        </li>


{/* MENU CONDOMÍNIO */}
                                        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-building"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Condomínio
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Condomínio
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>

    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Cadastro Geral
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Documentos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Responsaveis Legais
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Finanças
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Funcionários
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Administração
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Seguro Predial
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Contratos Mensais
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>

{/* MENU UNIDADES */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-home"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Unidades
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Unidades
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>

    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon  la la-home"></i>
                                                            <span className="m-menu__link-text">
                                                                Cadastro de Unidades
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon  la la-home"></i>
                                                            <span className="m-menu__link-text">
                                                                Unidades
                                                            </span>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>


{/* MENU FINANCEIRO */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-money"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Financeiro
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            <span className="m-badge m-badge--danger">
                                                                1
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Financeiro
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>

    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                A Pagar
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                Remessa de pagamento
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                A Receber
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                Gerar Cobrança
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                Movimentações Bancárias
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                Retorno Bancário
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                Inadimplência/Gerar Acordos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                Gerar NF
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                Fornecedores
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-money"></i>
                                                            <span className="m-menu__link-text">
                                                                Plano de Contas Adm
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>


{/* MENU ATENDIMENTO */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-headphones"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Atendimento
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Atendimento
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-headphones"></i>
                                                            <span className="m-menu__link-text">
                                                                Pedidos de Compras
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-headphones"></i>
                                                            <span className="m-menu__link-text">
                                                                Assembleia
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-headphones"></i>
                                                            <span className="m-menu__link-text">
                                                                Comunicados
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-headphones"></i>
                                                            <span className="m-menu__link-text">
                                                               Fornecedores
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>


{/* MENU ONLINE */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-share-alt"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            On-Line
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        On-Line
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Portaria
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Acesso Síndico
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Prestação Digital
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Atas
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Documentos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Reservas
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Livro de Ocorrências
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Contatos úteis
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Configurações
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Histórico fornecedores
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Classificados
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Enquetes
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-share-alt"></i>
                                                            <span className="m-menu__link-text">
                                                                Achados e perdidos
                                                            </span>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>


{/* MENU RELATORIOS */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-file-text"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Relatorios
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Relatorios
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Prédefinidos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Financeiros
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Unidades
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Inadimplência
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Protocolos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Despesas
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Receitas
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Favoritos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Financeiro
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Condomínios
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Pool
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Usuários
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-file-text"></i>
                                                            <span className="m-menu__link-text">
                                                                Sistema
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>


{/* MENU CONFIGURAÇÕES */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-cog"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Configurações
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Configurações
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cog"></i>
                                                            <span className="m-menu__link-text">
                                                                Tabelas financeiras
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cog"></i>
                                                            <span className="m-menu__link-text">
                                                                Tabelas Gerais
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>


{/* MENU CONDOMÍNIOS */}

                                        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-building"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Condomínios
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Condomínios
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Implantação
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Condomínios
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Fechar Movimentações
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Agenda de Assembléias
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-building"></i>
                                                            <span className="m-menu__link-text">
                                                                Alerta de Atividades
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>


{/* MENU COMPRAS E CONTRATOS */}

                                        <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-files-o"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Compras e Contratos
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Compras & Contratos
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-files-o"></i>
                                                            <span className="m-menu__link-text">
                                                                Gestão de Compras
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-files-o"></i>
                                                            <span className="m-menu__link-text">
                                                                Gestão de Contratos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-files-o"></i>
                                                            <span className="m-menu__link-text">
                                                                Lançamentos em Lote
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-files-o"></i>
                                                            <span className="m-menu__link-text">
                                                                Fornecedores
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>


{/* MENU AUDITORIA POOL */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-cubes"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Auditoria Pool
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Auditoria Pool
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUB-MENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cubes"></i>
                                                            <span className="m-menu__link-text">
                                                                Clientes Pool
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cubes"></i>
                                                            <span className="m-menu__link-text">
                                                                Conciliação Bancária
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cubes"></i>
                                                            <span className="m-menu__link-text">
                                                                Tarifas Automáticas
                                                            </span>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>


{/* MENU JURIDICO */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-legal"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Jurídico
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Jurídico
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUBMENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-legal"></i>
                                                            <span className="m-menu__link-text">
                                                                Regras de Cobrança
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-legal"></i>
                                                            <span className="m-menu__link-text">
                                                                Inadimplência Geral
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-legal"></i>
                                                            <span className="m-menu__link-text">
                                                                Ações de Cobrança
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-legal"></i>
                                                            <span className="m-menu__link-text">
                                                                Ações Trabalhistas
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-legal"></i>
                                                            <span className="m-menu__link-text">
                                                                Outras Ações
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-legal"></i>
                                                            <span className="m-menu__link-text">
                                                                Escritórios de Cobrança
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-legal"></i>
                                                            <span className="m-menu__link-text">
                                                                Advogados
                                                            </span>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>


{/* MENU BANCO */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-balance-scale"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Banco
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Banco
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUBMENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-balance-scale"></i>
                                                            <span className="m-menu__link-text">
                                                            Contas Bancárias
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-balance-scale"></i>
                                                            <span className="m-menu__link-text">
                                                            Conciliação
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-balance-scale"></i>
                                                            <span className="m-menu__link-text">
                                                            Extratos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-balance-scale"></i>
                                                            <span className="m-menu__link-text">
                                                            Saldos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-balance-scale"></i>
                                                            <span className="m-menu__link-text">
                                                            Configurações de Cobrança
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>


{/* MENU CLIENTES */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-users"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Clientes
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Clientes
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUBMENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-users"></i>
                                                            <span className="m-menu__link-text">
                                                            Implantação
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-users"></i>
                                                            <span className="m-menu__link-text">
                                                            Contratos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-users"></i>
                                                            <span className="m-menu__link-text">
                                                            Síndicos
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-users"></i>
                                                            <span className="m-menu__link-text">
                                                            Reajuste
                                                            </span>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>


{/* MENU CONTA POOL */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-cubes"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Conta Pool
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            {/* <span className="m-badge m-badge--danger">
                                                                0
                                                            </span> */}
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Conta Pool
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUBMENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cubes"></i>
                                                            <span className="m-menu__link-text">
                                                            Contas Bancárias
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cubes"></i>
                                                            <span className="m-menu__link-text">
                                                            Clientes Pool
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cubes"></i>
                                                            <span className="m-menu__link-text">
                                                            Conciliação
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cubes"></i>
                                                            <span className="m-menu__link-text">
                                                            Saldos Pool
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-cubes"></i>
                                                            <span className="m-menu__link-text">
                                                            Tarifas Pool
                                                            </span>
                                                        </a>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>


{/* MENU ADMINISTRADORA */}

<li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true"  data-menu-submenu-toggle="hover">
                                            <a  href="index.html" className="m-menu__link m-menu__toggle">
                                                <span className="m-menu__item-here"></span>
                                                <i className="m-menu__link-icon la la-bank"></i>
                                                <span className="m-menu__link-title">
                                                    <span className="m-menu__link-wrap">
                                                        <span className="m-menu__link-text">
                                                            Administradora
                                                        </span>
                                                        <span className="m-menu__link-badge">
                                                            <span className="m-badge m-badge--danger">
                                                                3
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <i className="m-menu__ver-arrow la la-angle-right"></i>
                                            </a>
                                            <div className="m-menu__submenu">
                                                <span className="m-menu__arrow"></span>
                                                <ul className="m-menu__subnav">
                                                    <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true" >
                                                        <a  href="index.html" className="m-menu__link ">
                                                            <span className="m-menu__item-here"></span>
                                                            <span className="m-menu__link-title">
                                                                <span className="m-menu__link-wrap">
                                                                    <span className="m-menu__link-text">
                                                                        Administradora
                                                                    </span>
                                                                    <span className="m-menu__link-badge">
                                                                        <span className="m-badge m-badge--danger">
                                                                            0
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    
    {/* SUBMENU */}
                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-bank"></i>
                                                            <span className="m-menu__link-text">
                                                                Cadastro Administradora
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-bank"></i>
                                                            <span className="m-menu__link-text">
                                                                Usuários
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-bank"></i>
                                                            <span className="m-menu__link-text">
                                                                Logomarca
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-bank"></i>
                                                            <span className="m-menu__link-text">
                                                                Rodapé
                                                            </span>
                                                        </a>
                                                    </li>

                                                    <li className="m-menu__item " aria-haspopup="true" >
                                                        <a  href="inner.html" className="m-menu__link ">
                                                            <i className="m-menu__link-icon la la-bank"></i>
                                                            <span className="m-menu__link-text">
                                                                Tabelas Gerais
                                                            </span>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>


{/* FIM DOS MENUS */}

                                    </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <ContentGrid>
                    <SubHeaderWrapper title='Dashboard'>
                        <BreadcrumbsWrapper>
                            <BreadcrumbsItem label='Dashboard' />
                        </BreadcrumbsWrapper>
                    </SubHeaderWrapper>

                    <CardWrapper>
                        <CardWrapperHeader>
                            <CardHeaderItem label='Dashboard card header example' />
                        </CardWrapperHeader>

                        <CardWrapperContent>
                            <h1>Dashboard card content example</h1>
                        </CardWrapperContent>

                        <CardWrapperFooter>
                            <h2>Dashboard card footer example</h2>
                        </CardWrapperFooter>
                    </CardWrapper>
                </ContentGrid>

            </div>
            </div >
        )
    }
}

export default Dashboard