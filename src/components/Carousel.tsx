import React, {useEffect, useState, useCallback} from 'react';
// import Card from './Card';
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

  const handleCardStyles = (cardRefs: CardNums, cardId: number) => {
    if (cardRefs.currentCard === cardId) {
      return 'currentCard';
    } else if (cardRefs.previousCard === cardId) {
      return 'previousCard';
    } else if (cardRefs.nextCard === cardId) {
      return 'nextCard';
    }
  }

  const handleCardChanges = useCallback(() => {
    if (cardRefs.currentCard >= cardData.length) {
      setCardRefs({
        previousCard: cardData.length - 1,
        currentCard: 0,
        nextCard: 1
      })
    } else {
      setCardRefs((currentRefs) => ({
        previousCard: currentRefs.currentCard,
        currentCard: currentRefs.currentCard + 1,
        nextCard: currentRefs.currentCard + 2 <= cardData.length - 1 ? currentRefs.currentCard + 2 : 0
      }))
    }
  }, [cardRefs])

  return (
    <div className="Carousel-card-carousel">
      I AM A CAROUSEL COMPONENT
      <ul>
        {cardData.map((card) => (
          <li key={card.id} className='Carousel-card'>{card.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel;