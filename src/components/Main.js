import {useState, useEffect} from 'react';
import api from '../utils/Api.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    // const [userId, setUserId] = useState('');

// function handleEditAvatarClick() {
//     const popupAvatar = document.querySelector('.popup_avatar');
//     popupAvatar.classList.add('popup_opened');
// }

// function handleEditProfileClick() {
//     const popupProfile = document.querySelector('.popup_profile');
//     popupProfile.classList.add('popup_opened');
// }

// function handleAddPlaceClick() {
//     const popupProfile = document.querySelector('.popup_place');
//     popupProfile.classList.add('popup_opened');
// }

useEffect(() => {
    Promise.all([api.getUserData()])
        .then(allData => {
            const [userData] = allData;
            return [userData]
        })
        .then(([userData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
        })
        .catch(err => console.log(`Не удалось загрузить данные. Ошибка: ${err}`));
        
})


    return(
        <main>
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-frame">
                        <div className="profile__avatar-hover" onClick={onEditAvatar}></div>
                        <img className="profile__avatar" src={userAvatar} name="avatar" alt="Улыбающийся Жак Ив Кусто в красной шапочке" />
                     </div>  
                    <div className="profile__text">
                        <h1 className="profile__title">
                            {/* Жак Ив Кусто */}
                            {userName}
                            </h1>
                        <button aria-label="Редактирование профиля" className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        <p className="profile__title-job">
                            {/* Исследователь океана */}
                            {userDescription}
                            </p>
                    </div>  
                </div>
                <button aria-label="Добавление карточки" className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            {/* <section className="elements">
                <ul className="elements__element"></ul>
            </section> */}
        </main>
    )
}

export default Main;