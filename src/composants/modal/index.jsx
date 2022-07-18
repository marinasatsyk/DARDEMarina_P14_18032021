import React from 'react';

function Modal({ setOpenModal, message }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <div className="wrapperBtn">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>
                <div className="title-modal">
                    <h1>{message}</h1>
                </div>
            </div>
        </div>
    );
}

export default Modal;
