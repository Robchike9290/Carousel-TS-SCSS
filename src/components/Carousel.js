import React, {useEffect, useState, useCallback} from 'react';
import Card from './Card.js';
import cardData from '../cardData.js';

const Carousel = () => {
  const [cardRefs, setCardRefs] = useState({
    previousCard: 0,
    currentCard: 0,
    nextCard: 1
  })

  const setCardStates = (cards, cardId) => {
    if (cards.currentCard === cardId) {
      return 'currentCard';
    } else if (cards.previousCard === cardId) {
      return 'previousCard';
    } else if (cards.nextCard === cardId) {
      return 'nextCard';
    }
  }

  return (
    <div>
      I AM A CAROUSEL COMPONENT
      <ul>
        {cardData.map((card) => (
          <Card key={card.id} text={card.text}></Card>
        ))}
      </ul>
    </div>
  )
}

export default Carousel;