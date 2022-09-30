import {useState} from 'react';
// import './App.css';
// import '../index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';

function App() {

    // function closePopup() { 
    //     const popupOpened = document.querySelector('.popup_opened');
    //     popupOpened.classList.remove('popup_opened');
    //   } 

    const [isEditAvatarPopupOpen, setEditAvatarState] = useState(false);
    const [isEditProfilePopupOpen, setEditProfileState] = useState(false);
    const [isAddPlacePopupOpen, setAddPlaceState] = useState(false);

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
    }


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    <div className="root">
    <div className="page">
        <Header />
        <Main onEditProfile={onEditProfile} onAddPlace={onAddPlace} onEditAvatar={onEditAvatar} />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Сохранить"  >
            <label className="popup__field">
                <input type="text" id="name-input" placeholder="Имя" name="nameProfile" className="popup__text popup__text_input_name" required minlength="2" maxlength="40" />
                <span id="name-input-error" className="error"></span>
            </label>
            <label className="popup__field">
                <input type="text" id="job-input" placeholder="Профессия" name="jobProfile" className="popup__text popup__text_input_job" required minlength="2" maxlength="200" />
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
                <input type="text" id="place-input" placeholder="Название" name="name" className="popup__text popup__text_input_name" required minlength="2" maxlength="30" />
                <span id="place-input-error" className="error"></span>
            </label>
            <label className="popup__field">
                <input type="url" id="link-input" placeholder="Ссылка на картинку" name="link" className="popup__text popup__text_input_job" required />
                <span id="link-input-error" className="error"></span>
            </label>
        </PopupWithForm>

        <div className="popup popup_delete">
            <div className="popup__container">
                <button className="popup__close-btn" type="button"></button>
                <form className="popup__form popup__form_profile" name="delete">
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button className="popup__save-button" type="submit">Да</button>
                </form>
            </div>
        </div>

        <div className="popup popup_photo popup_shadow">
            <div className="popup__preview">
                <img className="popup__image" src=" " alt=" " />
                <p className="popup__description"></p>
                <button className="popup__close-btn" type="button"></button>
            </div>
        </div>
    
    </div>
    </div>

  );
}

export default App;
