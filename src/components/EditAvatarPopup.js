import { useEffect, useRef, useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    // const [avatar, setAvatar] = React.useState("");
    const inputRef = useRef();

    // const [isValid, setValidity] = useState({valid: false, msg: ''});

    // function handleChange(e) {
    //     setAvatar(e.target.value);
    //   }


    // function handleValidation() {
    //   if (inputRef.current.validity.valid) {
    //       setValidity({valid: true, msg: ''})
    //   } else {
    //       setValidity({valid: false, msg: inputRef.current.validationMessage})
    //   }
    // }

    useEffect(() =>{
      inputRef.current.value = '';
    //   setValidity({valid: false, msg: ''});
    }, [isOpen])

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateAvatar({
            avatar: inputRef.current.value
        });
    }

    return (

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}  buttonText="Сохранить">
            <label className="popup__field">
                <input ref={inputRef} type="url" id="avatar-input" placeholder="Ссылка на аватар" name="link" className="popup__text popup__text_input_job" required onChange={handleChange}/>
                <span id="avatar-input-error" className="error"></span>
            </label>
    </PopupWithForm>

    )

}

export default EditAvatarPopup;