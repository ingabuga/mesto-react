import { useEffect, useRef, useState} from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    // const inputRef = useRef();

    // function handleSubmit(evt) {
    //     evt.preventDefault();
        
    //     onUpdateAvatar({
    //         avatar: inputRef.current.value
    //     });
    // }


    // useEffect(() =>{
    //     inputRef.current.value = '';
    // }, [isOpen])

    const [avatar, setAvatar] = useState("");
    const currentAvatar = useRef(null);
  
    function handleChange(e) {
      setAvatar(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      onUpdateAvatar({
        avatar: currentAvatar.current,
      });
      setAvatar("");
    }

    return (

    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} buttonText="Сохранить">
            <div className="popup__field">
                <input  value={avatar} type="url" id="avatar-input" placeholder="Ссылка на аватар" name="link" className="popup__text popup__text_input_job" required ref={currentAvatar} onChange={handleChange}/>
                <span id="avatar-input-error" className="error"></span>
            </div>
    </PopupWithForm>

    )

}

export default EditAvatarPopup;