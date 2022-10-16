import { useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext.js';
// import React from 'react';


function PopupWithForm({ name, title, buttonText, isOpen, onClose, onSubmit, isValid = true, children }) {
    const isLoading = useContext(LoadingContext);

    return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
        <div className="popup__container">
            <button 
                className="popup__close-btn" 
                type="button" 
                onClick={onClose} 
            />
            <form 
                className="popup__form" 
                name={name} 
                onSubmit={onSubmit} 
                noValidate 
            >
                <h2 className="popup__title">{title}</h2>
                {children}
                <button 
                    // className="popup__save-button" 
                    className={`popup__save-button ${name === 'delete'} ${!isValid && "popup__save-button_inactive"}`}
                    type="submit" 
                    disabled={!isValid}
                    // onClick={onClose}
                > 
                {isLoading ? 'Сохранение...' : buttonText}
                </button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm;