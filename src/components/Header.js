import React from 'react'
import './Header.css'
import ImagemNetflix from './netflix--logo.png'
import logoFace from './netflixface.png'

export default ({black}) => {
    return (
        <header className={black ? 'black': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={ImagemNetflix}></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={logoFace}></img>
                </a>
            </div>
        </header>
    )
}