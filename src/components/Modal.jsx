import React from 'react';


const Modal = ({ handleClose, show, children })=>{

    const showHideClassName = show ? 'modal display-block' : 'modal';

    return(
        <div className={showHideClassName}>
            <section className="modal-main">
            {children}
            
            <button onClick={handleClose} >Done?</button>   
            </section>
        </div>
    );
}
export default Modal;