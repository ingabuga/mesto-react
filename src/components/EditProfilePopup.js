import { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);


    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
            name,
            about: description
        });
    }

    function handleNameChange(evt) {
       setName(evt.target.value);
    }

    function handleDescriptionChange(evt) {
        setDescription( evt.target.value);
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, 
    [currentUser, isOpen])

return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить"  >
    <label className="popup__field">
        <input type="text" id="name-input" placeholder="Имя" name="nameProfile" className="popup__text popup__text_input_name" required minLength="2" maxLength="40" onChange={handleNameChange} />
        <span id="name-input-error" className="error"></span>
    </label>
    <label className="popup__field">
        <input type="text" id="job-input" placeholder="Профессия" name="jobProfile" className="popup__text popup__text_input_job" required minLength="2" maxLength="200" onChange={handleDescriptionChange} />
        <span id="job-input-error" className="error"></span>
    </label>
    </ PopupWithForm>
)

}

export default EditProfilePopup;