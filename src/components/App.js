import {useState, useEffect} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
// import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import { LoadingContext } from '../contexts/LoadingContext.js';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarState] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfileState] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlaceState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({data: {}, isOpen: false});
  const [deletedCard, setDeletedCard] = useState({data: {}, isOpen: false});

  const [currentUser, setCurrentUser] =useState({});
  const [cardsData, setCardsData] = useState([]);


  useEffect(() => {
      Promise.all([api.getInitialCards(), api.getUserData()])
        .then(([cardsData, userData]) => {
            setCurrentUser(userData);
            setCardsData(cardsData);
        })
        .catch(err => console.log(`Не удалось загрузить данные. Ошибка: ${err}`));      
  }, []);
  

  function onEditAvatar() {
      setIsEditAvatarState(true)
  }

  function onEditProfile() {
      setIsEditProfileState(true)
  }

  function onAddPlace() {
      setIsAddPlaceState(true)
  }

  function closeAllPopups() {
      setIsEditAvatarState(false);
      setIsEditProfileState(false);
      setIsAddPlaceState(false);
      setSelectedCard({data: {}, isOpen: false})
      setDeletedCard({data: {}, isOpen: false});
  }

  function handleCardClick(card) {
      setSelectedCard({data: card, isOpen: true});
    }

    function handleDeleteClick(card) {
      setDeletedCard({data: card, isOpen: true});
  }
    
  //Обработчик нажатия Escape
  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard.isOpen || deletedCard.isOpen

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) { 
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])


 function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id) ? true : false;

    (isLiked ? api.removeLike(card._id) : api.addLike(card._id))
      .then(newCard => {
        setCardsData((cardsData) => cardsData.map(currentCard => currentCard._id === card._id ? newCard : currentCard));
      })
       .catch(err => console.log(`Не удалость загрузить данные. Ошибка: ${err}`));
  }


  function handleCardDelete(card) { 
    api.removeCard(card._id)
      .then(() => {
        setCardsData(cardsData => cardsData.filter((item) => item._id !== card._id));
      })
      .then(() => closeAllPopups())
      .catch(err => console.log(`Не удалость удалить карточку. Ошибка: ${err}`))
  }

  const [isLoading, setIsLoading] = useState(false);


  function handleUpdateUser(data) {
    setIsLoading(true);
    api.patchUserData(data)
      .then(newUserData => setCurrentUser(newUserData))
      .then(() => closeAllPopups())
      .catch(err => console.log(`Не удалость обновить данные пользователя. Ошибка: ${err}`))
      .finally(() => setIsLoading(false));
  }


  function handleUpdateAvatar(data) {
    setIsLoading(true);
    api.patchAvatar(data)
      .then(newUserData => setCurrentUser(newUserData))
      .then(() => closeAllPopups())
      .catch(err => console.log(`Не удалость обновить аватар. Ошибка: ${err}`))
      .finally(() => setIsLoading(false));
  }


  function handleAddPlaceSubmit(data) {
    setIsLoading(true);
    api.addNewCard(data)
      .then(newCard => setCardsData([newCard, ...cardsData]))
      .then(() => closeAllPopups())
      .catch(err => console.log(`Не удалость отправить карточку. Ошибка: ${err}`))
      .finally(() => setIsLoading(false));
  }


  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser} >
          <Header />
          
          <Main 
            onEditProfile={onEditProfile} 
            cardsData={cardsData} 
            onAddPlace={onAddPlace} 
            onEditAvatar={onEditAvatar} 
            onCardClick={handleCardClick} 
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteClick} 
          />
          
          <Footer />
          <LoadingContext.Provider value={isLoading} >
            <EditProfilePopup 
              isOpen={isEditProfilePopupOpen} 
              onClose={closeAllPopups} 
              onUpdateUser={handleUpdateUser}
            />
            
            <EditAvatarPopup 
              isOpen={isEditAvatarPopupOpen} 
              onClose={closeAllPopups} 
              onUpdateAvatar={handleUpdateAvatar} 
            />

            <AddPlacePopup 
              isOpen={isAddPlacePopupOpen} 
              onClose={closeAllPopups} 
              onAddPlace={handleAddPlaceSubmit} 
            />

            <DeleteCardPopup 
              isOpen={deletedCard.isOpen} 
              onClose={closeAllPopups} 
              card={deletedCard.data} 
              onDeleteCard={handleCardDelete} 
            />
          </LoadingContext.Provider>

          <ImagePopup 
            isOpen={selectedCard.isOpen} 
            onClose={closeAllPopups} 
            card={selectedCard.data} 
            isLoading={isLoading}
          />
        </CurrentUserContext.Provider>
      </div>
    
    </div>

  );
}

export default App;
