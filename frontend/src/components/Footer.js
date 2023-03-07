import React from 'react'

const Footer = () => {

    const ano = () => {
        return new Date().getFullYear()
    }

  return (
    <>
        <footer>
            Todos os direitos reservados &copy; {ano()}
        </footer>
    </>
  )
}

export default Footer