import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = useState({
        value: '',
        isValid: false,
        validationMsg: ''
    });

    const [link, setLink] = useState({
        value: '',
        isValid: false,
        validationMsg: ''
    });

    const [formIsValid, setFormValidity] = useState(false);


    function handleNameChange(evt) {
        if (evt.target.validity.valid) {
            setName({
                value: evt.target.value,
                isValid: true,
                validationMsg: ''
            });
        } else {
            setName({
                value: evt.target.value,
                isValid: false,
                validationMsg: evt.target.validationMessage
            });
        }
    }

    function handleLinkChange(evt) {
        if (evt.target.validity.valid) {
            setLink({
                value: evt.target.value,
                isValid: true,
                validationMsg: ''
            });
        } else {
            setLink({
                value: evt.target.value,
                isValid: false,
                validationMsg: evt.target.validationMessage
            });
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        
        onAddPlace({
            name: name.value,
            link: link.value
        })
    }

    function handleFormValidity() {
        name.isValid && link.isValid ? setFormValidity(true) : setFormValidity(false);
    }

    useEffect(() => {
        handleFormValidity();
        },
    [name, link])

    useEffect(() => {
        setName({
            value: '',
            isValid: false,
            validationMsg: ''});
        setLink({
            value: '',
            isValid: false,
            validationMsg: '' });
    }, [isOpen])




    return (
    <PopupWithForm 
        name="place" 
        title="Новое место" 
        buttonText="Создать"
        isOpen={isOpen} 
        onClose={onClose} 
        onSubmit={handleSubmit} 
        isValid={formIsValid} 
    >
        <label className="popup__field">
            <input 
                type="text" 
                id="place-input" 
                placeholder="Название" 
                name="name" className="popup__text popup__text_input_name" required minLength="2" maxLength="30" 
                onChange={handleNameChange} 
                value={name.value} 
            />
            <span id="place-input-error" 
                className={`error ${(!name.isValid && isOpen) ? "error_active" : ""}`}>
                    {name.validationMsg}
            </span>
        </label>
        <label className="popup__field">
            <input 
                type="url" 
                id="link-input" 
                placeholder="Ссылка на картинку" 
                name="link" className="popup__text popup__text_input_job" required 
                onChange={handleLinkChange} 
                value={link.value}
            />
            <span id="link-input-error" 
                className={`error ${(!link.isValid && isOpen) ? "error_active" : ""}`}>
                    {link.validationMsg}
            </span>
        </label>
    </PopupWithForm>
    )
}

export default AddPlacePopup;