// import './App.css';
// import '../index.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App() {

    function closePopup() { 
        const popupOpened = document.querySelector('.popup_opened');
        popupOpened.classList.remove('popup_opened');
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
        <Main />
        <Footer />
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
        <div className="popup popup_avatar">
            <div className="popup__container">
                <button className="popup__close-btn" type="button" onClick={closePopup}></button>
                <form className="popup__form popup__form_profile" name="profile" novalidate>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <label className="popup__field">
                        <input type="url" id="avatar-input" placeholder="Ссылка на аватар" name="link" value="" className="popup__text popup__text_input_job" required />
                        <span id="avatar-input-error" className="error"></span>
                    </label>
                    <button className="popup__save-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup_delete">
            <div className="popup__container">
                <button className="popup__close-btn" type="button"></button>
                <form className="popup__form popup__form_profile" name="delete">
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button className="popup__save-button" type="submit">Да</button>
                </form>
            </div>
        </div>
       <div className="popup popup_place">
            <div className="popup__container">
                <button className="popup__close-btn" type="button" onClick={closePopup}></button>
                <form className="popup__form popup__form_place" name="profile" novalidate>
                    <h2 className="popup__title">Новое место</h2>
                    <label className="popup__field">
                        <input type="text" id="place-input" placeholder="Название" name="name" value="" className="popup__text popup__text_input_name" required minlength="2" maxlength="30" />
                        <span id="place-input-error" className="error"></span>
                    </label>
                    <label className="popup__field">
                        <input type="url" id="link-input" placeholder="Ссылка на картинку" name="link" value="" className="popup__text popup__text_input_job" required />
                        <span id="link-input-error" className="error"></span>
                    </label>
                    <button className="popup__save-button" type="submit">Создать</button>
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

    // <div className="App">
    //   <Header />
    // </div>

  );
}

export default App;
