import React from 'react'

import {BsLinkedin, BsGithub} from 'react-icons/bs'


const Footer = () => {

    const ano = () => {
        return new Date().getFullYear()
    }

  return (
    <>
        <footer>
            <span id="footer-direitos">
              Todos os direitos reservados &copy; {ano()}
            </span>
            <span id="footer-politica-privacidade">
              <a href="/">Política de Privacidade</a>
            </span>
            <div id="footer-redes">
              <a href="/" target="_blank" rel="noreferrer">
                <BsLinkedin size={30} />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <BsGithub size={30} />
              </a>
            </div>
        </footer>
    </>
  )
}

export default Footer