import React from 'react';

function Main() {

function handleEditAvatarClick() {
    const popupAvatar = document.querySelector('.popup_avatar');
    popupAvatar.classList.add('popup_opened');
}

function handleEditProfileClick() {
    const popupProfile = document.querySelector('.popup_profile');
    popupProfile.classList.add('popup_opened');
}

function handleAddPlaceClick() {
    const popupProfile = document.querySelector('.popup_place');
    popupProfile.classList.add('popup_opened');
}

    return(
        <main>
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-frame">
                        <div className="profile__avatar-hover" onClick={handleEditAvatarClick}></div>
                        <img className="profile__avatar" src="#" name="avatar" alt="Улыбающийся Жак Ив Кусто в красной шапочке" />
                     </div>  
                    <div className="profile__text">
                        <h1 className="profile__title">Жак Ив Кусто</h1>
                        <button aria-label="Редактирование профиля" className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                        <p className="profile__title-job">Исследователь океана</p>
                    </div>  
                </div>
                <button aria-label="Добавление карточки" className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="elements">
                <ul className="elements__element"></ul>
            </section>
        </main>
    )
}

export default Main;