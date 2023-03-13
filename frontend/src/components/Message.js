import React from 'react'

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const Message = ({action, showMessage, bg}) => {

    const [show, setShow] = React.useState(showMessage);

  return (
    <>
        <ToastContainer position="top-end" className="p-3">
            <Toast 
            show={show}
            onClose={() => setShow(!show)}
            bg={bg}>
            <Toast.Header>
                <strong className="me-auto">Gerenciamento de Pessoas</strong>
            </Toast.Header>
            <Toast.Body>{action}</Toast.Body>
            </Toast>
        </ToastContainer>
    </>
  )
}

export default Message