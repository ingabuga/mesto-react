import { useContext } from 'react';
import React from 'react';


function PopupWithForm({ name, title, buttonText, isOpen, onClose, onSubmit, children }) {
    return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
        <div className="popup__container">
            <button className="popup__close-btn" type="button" onClick={onClose} />
            <form className="popup__form" name={name} onSubmit={onSubmit} noValidate>
                <h2 className="popup__title">{title}</h2>
                {children}
                <button className="popup__save-button" type="submit" onClick={onClose}>{buttonText}</button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm;