import React from 'react';

function PopupWithForm() {
    return (
    <div className="popup popup_profile">
        <div className="popup__container">
            <button className="popup__close-btn" type="button" onClick={closePopup}></button>
            <form className="popup__form popup__form_profile" name="profile" novalidate>
                <h2 className="popup__title">Редактировать профиль</h2>
                <label className="popup__field">
                    <input type="text" id="name-input" placeholder="Имя" name="nameProfile" value="Жак Ив Кусто" className="popup__text popup__text_input_name" required minlength="2" maxlength="40" />
                    <span id="name-input-error" className="error"></span>
                </label>
                <label className="popup__field">
                    <input type="text" id="job-input" placeholder="Профессия" name="jobProfile" value="Исследователь океана" className="popup__text popup__text_input_job" required minlength="2" maxlength="200" />
                    <span id="job-input-error" className="error"></span>
                </label>
                <button className="popup__save-button" type="submit">Сохранить</button>
            </form>
        </div>
    </div>
    )
}

export default PopupWithForm;