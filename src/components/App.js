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


function App() {


    const [isEditAvatarPopupOpen, setEditAvatarState] = useState(false);
    const [isEditProfilePopupOpen, setEditProfileState] = useState(false);
    const [isAddPlacePopupOpen, setAddPlaceState] = useState(false);
    const [selectedCard, setSelectedCard] = useState({data: '', isOpen: false});
    const [deletedCard, setDeletedCard] = useState({data: '', isOpen: false});

    const [currentUser, setCurrentUser] =useState({});
    const [cardsData, setCardsData] = useState([]);


    useEffect(() => {
        Promise.all([api.getInitialCards(), api.getUserData()])
            .then(allData => {
                const [cardsData, userData] = allData;
                return [cardsData, userData]
            })
            .then(([cardsData, userData]) => {
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
        setDeletedCard({data: '', isOpen: false});
    }

    function handleCardClick(card) {
        setSelectedCard({data: card, isOpen: true});
      }

      function handleDeleteClick(card) {
        setDeletedCard({data: card, isOpen: true});
      }


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

  function handleUpdateUser(data) {
    
    api.patchUserData(data)
      .then(newUserData => setCurrentUser(newUserData))
      .then(() => closeAllPopups())
      .catch(err => console.log(`Не удалость обновить данные пользователя. Ошибка: ${err}`))
  }

  //приходит пустая ссылка
  function handleUpdateAvatar(data) {
    console.log(data);
    api.patchAvatar(data)
      .then(newUserData => setCurrentUser(newUserData))
      .then(() => closeAllPopups())
      .catch(err => console.log(`Не удалость обновить аватар. Ошибка: ${err}`))
  }


  function handleAddPlaceSubmit(data) {
    
    api.addNewCard(data)
      .then(newCard => setCardsData([newCard, ...cardsData]))
      .then(() => closeAllPopups())
      .catch(err => console.log(`Не удалость отправить карточку. Ошибка: ${err}`))
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
        onCardDelete={handleDeleteClick} />
        
        <Footer />
        
        <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser}/>
        
        <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        onUpdateAvatar={handleUpdateAvatar} />

        <AddPlacePopup 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
        onAddPlace={handleAddPlaceSubmit} />


        <ImagePopup 
        isOpen={selectedCard.isOpen} 
        onClose={closeAllPopups} 
        card={selectedCard.data} />

        <DeleteCardPopup 
        isOpen={deletedCard.isOpen} 
        onClose={closeAllPopups} 
        card={deletedCard.data} 
        onDeleteCard={handleCardDelete} />
        
    </CurrentUserContext.Provider>
    </div>
    
    </div>

  );
}

export default App;
