import logo from '../logo.svg';
import './App.css';
// import Header from './Header.js';

function App() {
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

<body className="page">
        <header className="header">
            <img className="logo header__logo" src="<%=require('./images/logo-mesto_white.svg')%>" alt="Логотип" />
        </header>
        <main>
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar-frame">
                        <div className="profile__avatar-hover"></div>
                        <img className="profile__avatar" src="#" name="avatar" alt="Улыбающийся Жак Ив Кусто в красной шапочке" />
                     </div>  
                    <div className="profile__text">
                        <h1 className="profile__title">Жак Ив Кусто</h1>
                        <button aria-label="Редактирование профиля" className="profile__edit-button" type="button"></button>
                        <p className="profile__title-job">Исследователь океана</p>
                    </div>  
                </div>
                <button aria-label="Добавление карточки" className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
                <ul className="elements__element"></ul>
            </section>
        </main>
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
        <div className="popup popup_profile">
            <div className="popup__container">
                <button className="popup__close-btn" type="button"></button>
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
                <button className="popup__close-btn" type="button"></button>
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
                <button className="popup__close-btn" type="button"></button>
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
    
    </body>

    // <div className="App">
    //   <Header />
    // </div>

  );
}

export default App;
