import React from 'react';

function ImagePopup({isOpen, onClose}) {
    return (
        <div className="popup popup_photo popup_shadow">
            <div className="popup__preview">
                <img className="popup__image" src=" " alt=" " />
                <p className="popup__description"></p>
                <button className="popup__close-btn" type="button"></button>
            </div>
        </div>
    )
}

export default ImagePopup;