import Card from './Card.js';
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cardsData, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);



    return(
        <main>
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-frame">
                        <div className="profile__avatar-hover" onClick={onEditAvatar}></div>
                        <img className="profile__avatar" src={currentUser.avatar} name="avatar" alt="Улыбающийся Жак Ив Кусто в красной шапочке" />
                     </div>  
                    <div className="profile__text">
                        <h1 className="profile__title">
                            {/* Жак Ив Кусто */}
                            {currentUser.name}
                            </h1>
                        <button aria-label="Редактирование профиля" className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        <p className="profile__title-job">
                            {/* Исследователь океана */}
                            {currentUser.about}
                            </p>
                    </div>  
                </div>
                <button aria-label="Добавление карточки" className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__element">
                    {cardsData.map(currentCard => {
                        return (
                            <Card card={currentCard} key={currentCard._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} 
                            />
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;