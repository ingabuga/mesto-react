import { useEffect, useRef} from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const inputRef = useRef();
    // let inputAvatar = inputRef.current.value;

    function handleSubmit(evt) {
        evt.preventDefault();
        
        onUpdateAvatar({
            avatar: inputRef.current.value
        });
    }


    useEffect(() =>{
        inputRef.current.value = '';
    }, [isOpen])

    return (

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить">
            <div className="popup__field">
                <input  type="url" id="avatar-input" placeholder="Ссылка на аватар" name="link" className="popup__text popup__text_input_job" required ref={inputRef}/>
                <span id="avatar-input-error" className="error"></span>
            </div>
    </PopupWithForm>

    )

}

export default EditAvatarPopup;