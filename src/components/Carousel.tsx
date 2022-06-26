import React, {useEffect, useState, useCallback} from 'react';
import Card from './Card';
import cardData from '../cardData';

interface CardNums {
  previousCard: number;
  currentCard: number;
  nextCard: number;
}

const Carousel = () => {
  const [cardRefs, setCardRefs] = useState<CardNums>({
    previousCard: 0,
    currentCard: 0,
    nextCard: 1
  })

  const setCardStyles = (cardRefs: CardNums, cardId: number) => {
    if (cardRefs.currentCard === cardId) {
      return 'currentCard';
    } else if (cardRefs.previousCard === cardId) {
      return 'previousCard';
    } else if (cardRefs.nextCard === cardId) {
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