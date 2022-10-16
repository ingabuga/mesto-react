import { useContext, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = useState('');
    // const [name, setName] = useState({
    //     value: '',
    //     isValid: false,
    //     validationMsg: ''
    // });
    const [description, setDescription] = useState('');
    // const [description, setDescription] = useState({
    //     value: '',
    //     isValid: false,
    //     validationMsg: ''
    // });

    const currentUser = useContext(CurrentUserContext);
    

    // const [formIsValid, setFormValidity] = useState(false);

    // function handleFormValidity() {
    //     (name.isValid && description.isValid) ? setFormValidity(true) : setFormValidity(false);
    // }

    // useEffect(() => {
    //     handleFormValidity();
    //     },
    // [name, description])



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

    // function handleNameChange(evt) {
    //     if (evt.target.validity.valid) {
    //         setName({
    //             value: evt.target.value,
    //             isValid: true,
    //             validationMsg: ''
    //         });
    //     } else {
    //         setName({
    //             value: evt.target.value,
    //             isValid: false,
    //             validationMsg: evt.target.validationMessage
    //         });
    //     }
    // }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    }


    // function handleDescriptionChange(evt) {
    //     if (evt.target.validity.valid) {
    //         setDescription({
    //             value: evt.target.value,
    //             isValid: true,
    //             validationMsg: ''
    //         });
    //     } else {
    //         setDescription({
    //             value: evt.target.value,
    //             isValid: false,
    //             validationMsg: evt.target.validationMessage
    //         });
    //     }
    // }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, 
    [currentUser, isOpen])

    // useEffect(() => {
    //     setName({
    //         value: currentUser.name,
    //         isValid: false,
    //         validationMsg: ''});
    //     setDescription({
    //         value: currentUser.about,
    //         isValid: false,
    //         validationMsg: '' });
    // }, [currentUser, isOpen])

return (
    <PopupWithForm 
        name="profile" 
        title="Редактировать профиль"
        buttonText="Сохранить" 
        isOpen={isOpen} 
        onClose={onClose} 
        onSubmit={handleSubmit}
        // isValid={formIsValid} 
    >
    <label className="popup__field">
        <input 
            type="text" 
            id="name-input" 
            placeholder="Имя" 
            name="nameProfile" 
            className="popup__text popup__text_input_name" required minLength="2" maxLength="40" 
            onChange={handleNameChange} 
            value={name || ''}
        />
        <span id="name-input-error" 
        className="error"
        // className={`error ${(!name.isValid && isOpen) ? "error_active" : ""}`}
        >
            {/* {name.validationMsg}    */}
        </span>
    </label>
    <label className="popup__field">
        <input 
            type="text" 
            id="job-input" 
            placeholder="Профессия" 
            name="jobProfile" 
            className="popup__text popup__text_input_job" required minLength="2" maxLength="200" 
            onChange={handleDescriptionChange} 
            value={description || ''}
        />
        <span id="job-input-error" 
        className="error"
        // className={`error ${(!description.isValid && isOpen) ? "error_active" : ""}`}
        >
            {/* {description.validationMsg} */}
        </span>
    </label>
    </ PopupWithForm>
)

}

export default EditProfilePopup;