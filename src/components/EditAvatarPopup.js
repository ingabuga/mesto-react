import { useEffect, useRef} from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const inputRef = useRef();

    useEffect(() =>{
      inputRef.current.value = '';
    }, [isOpen])

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateAvatar({
            avatar: inputRef.current.value
        });
    }

    return (

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить">
            <label className="popup__field">
                <input ref={inputRef} onChange={handleSubmit} type="url" id="avatar-input" placeholder="Ссылка на аватар" name="link" className="popup__text popup__text_input_job" required />
                <span id="avatar-input-error" className="error"></span>
            </label>
    </PopupWithForm>

    )

}

export default EditAvatarPopup;