import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, children, buttonText }) {
    return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
        <div className="popup__container">
            <button className="popup__close-btn" type="button" onClick={onClose} />
            <form className="popup__form" name={name} novalidate>
                <h2 className="popup__title">{title}</h2>
                {children}
                <button className="popup__save-button" type="submit">{buttonText}</button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm;