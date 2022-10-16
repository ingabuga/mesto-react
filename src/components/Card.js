import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    const isOwn = card.owner._id === currentUser._id;


    function handleClick() {
        onCardClick(card);
    }

    function handleLike() {
        onCardLike(card, isLiked);
     }
 
     function handleDeleteClick() {
         onCardDelete(card);
      }

    return(
        <li className="elements__item">
             <img className="elements__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="elements__container">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__likes">
                    <button type="button" className={isLiked ? "elements__like elements__like_active" : "elements__like" } onClick={handleLike}></button>
                    <p className="elements__like-numbers">{card.likes.length}</p>
                </div>
            </div>
            {isOwn ? <button className="elements__trash elements__trash-active" type="button" onClick={handleDeleteClick} /> : ''}

        </li>
    );


}

export default Card;