import React, {useEffect, useState, useCallback} from 'react';
// import Card from './Card';
import { cardData } from '../cardData';
import { CardDataTypes } from '../cardData';

interface CardNums {
  previousCard: number;
  currentCard: number;
  nextCard: number;
}

const Carousel = () => {
  const [cardRefs, setCardRefs] = useState<CardNums>({
    previousCard: 1,
    currentCard: 1,
    nextCard: 2
  })

  const handleCardStyles = (cardRefs: CardNums, cardId: number): string => {
    if (cardRefs.currentCard === cardId) {
      return 'currentCard';
    } else if (cardRefs.previousCard === cardId) {
      return 'previousCard';
    } else if (cardRefs.nextCard === cardId) {
      return 'nextCard';
    }
    return '';
  }

  const handleCardChanges: () => void = useCallback(() => {
    if (cardRefs.currentCard >= cardData.length) {
      setCardRefs({
        previousCard: cardData.length,
        currentCard: 1,
        nextCard: 2
      })
    } else {
      setCardRefs((currentRefs) => ({
        previousCard: currentRefs.currentCard,
        currentCard: currentRefs.currentCard + 1,
        nextCard: currentRefs.currentCard + 2 === cardData.length + 1 ? 1 : currentRefs.currentCard + 2
      }))
    }
  }, [cardRefs.currentCard])

  useEffect(() => {
    const randomStateChangeInterval: number = 4000 + (2000 * Math.random());
    const transition: NodeJS.Timer = setInterval(() => {
      handleCardChanges();
    }, randomStateChangeInterval);

    return () => clearInterval(transition);
  }, [handleCardChanges, cardRefs])

  return (
    <div className="Carousel-card-carousel">
      <ul>
        {cardData.map((card: CardDataTypes) => (
          <li key={card.id} className={`Carousel-card ${handleCardStyles(cardRefs, card.id)}`}>{card.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel;