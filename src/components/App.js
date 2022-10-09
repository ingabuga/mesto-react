import {useState, useEffect} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';


function App() {


    const [isEditAvatarPopupOpen, setEditAvatarState] = useState(false);
    const [isEditProfilePopupOpen, setEditProfileState] = useState(false);
    const [isAddPlacePopupOpen, setAddPlaceState] = useState(false);
    const [selectedCard, setSelectedCard] = useState({data: '', isOpen: false});
    const [currentUser, setCurrentUser] =useState({});
    const [cardsData, setCardsData] = useState([]);


    useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then(allData => {
                const [userData, cardsData] = allData;
                return [userData, cardsData]
            })
            .then(([userData, cardsData]) => {
                setCurrentUser(userData);
                setCardsData(cardsData);
            })
            .catch(err => console.log(`Не удалось загрузить данные. Ошибка: ${err}`));
            
    }, []);
    

    function onEditAvatar() {
        setEditAvatarState(true)
    }

    function onEditProfile() {
        setEditProfileState(true)
    }

    function onAddPlace() {
        setAddPlaceState(true)
    }

    function closeAllPopups() {
        setEditAvatarState(false);
        setEditProfileState(false);
        setAddPlaceState(false);
        setSelectedCard({data: '', isOpen: false})
    }

    function handleCardClick(card) {
        setSelectedCard({data: card, isOpen: true});
      }

  return (
    
    <div className="root">
        
    <div className="page">
    <CurrentUserContext.Provider value={currentUser} >
        <Header />
        <Main onEditProfile={onEditProfile} cardsData={cardsData} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить"  >
            <label className="popup__field">
                <input type="text" id="name-input" placeholder="Имя" name="nameProfile" className="popup__text popup__text_input_name" required minLength="2" maxLength="40" />
                <span id="name-input-error" className="error"></span>
            </label>
            <label className="popup__field">
                <input type="text" id="job-input" placeholder="Профессия" name="jobProfile" className="popup__text popup__text_input_job" required minLength="2" maxLength="200" />
                <span id="job-input-error" className="error"></span>
            </label>
        </ PopupWithForm>
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Сохранить">
            <label className="popup__field">
                <input type="url" id="avatar-input" placeholder="Ссылка на аватар" name="link" className="popup__text popup__text_input_job" required />
                <span id="avatar-input-error" className="error"></span>
            </label>
        </PopupWithForm>
        <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Создать">
            <label className="popup__field">
                <input type="text" id="place-input" placeholder="Название" name="name" className="popup__text popup__text_input_name" required minLength="2" maxLength="30" />
                <span id="place-input-error" className="error"></span>
            </label>
            <label className="popup__field">
                <input type="url" id="link-input" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_input_job" required />
                <span id="link-input-error" className="error"></span>
            </label>
        </PopupWithForm>
        <ImagePopup isOpen={selectedCard.isOpen} onClose={closeAllPopups} card={selectedCard.data} />

        {/* <div className="popup popup_delete">
            <div className="popup__container">
                <button className="popup__close-btn" type="button"></button>
                <form className="popup__form popup__form_profile" name="delete">
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button className="popup__save-button" type="submit">Да</button>
                </form>
            </div>
        </div> */}
    </CurrentUserContext.Provider>
    </div>
    
    </div>

  );
}

export default App;
