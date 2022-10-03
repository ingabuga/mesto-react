import React from 'react';

function Card({myId, card, onCardClick}) {
    let isLiked = card.likes.some(item => item._id === myId);
    let isMyCard = card.owner._id === myId;


    function handleClick() {
        onCardClick(card);
    }

    return(
        <li className="elements__item">
             <img className="elements__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="elements__container">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__likes">
                    <button type="button" className={isLiked ?"elements__like elements__like-active" : "elements__like"} ></button>
                    <p className="elements__like-numbers">{card.likes.length}</p>
                </div>
            </div>
            {isMyCard && <button className="elements__trash" type="button" />}
        </li>
    );



}

export default Card;