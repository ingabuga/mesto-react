// import { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup({ isOpen, onClose, card, onDeleteCard }) {

    function handleSubmit(evt) {
        evt.preventDefault();
        onDeleteCard(card);
    }

    return (
        <PopupWithForm
            name="delete"
            title="Вы уверены?"
            buttonText="Да"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        />
    )
}

export default DeleteCardPopup;