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
    });


    function handleNameChange(evt) {
        if (evt.target.validity.valid) {
            setName({
                value: evt.target.value,
            });
        } else {
            setName({
                value: evt.target.value,
            });
        }
    }

    function handleLinkChange(evt) {
        if (evt.target.validity.valid) {
            setLink({
                value: evt.target.value,
            });
        } else {
            setLink({
                value: evt.target.value,
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



    useEffect(() => {
        },
    [name, link])

    useEffect(() => {
        setName({value: ''});
        setLink({value: '' });
    }, [isOpen])




    return (
    <PopupWithForm name="place" title="Новое место" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Создать">
                <label className="popup__field">
                    <input type="text" id="place-input" placeholder="Название" name="name" className="popup__text popup__text_input_name" required minLength="2" maxLength="30" onChange={handleNameChange} value={name.value} />
                    <span id="place-input-error" className="error"></span>
                </label>
                <label className="popup__field">
                    <input type="url" id="link-input" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_input_job" required onChange={handleLinkChange} value={link.value}/>
                    <span id="link-input-error" className="error"></span>
                </label>
    </PopupWithForm>
    )
}

export default AddPlacePopup;