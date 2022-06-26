import React, {useEffect, useState, useCallback} from 'react';
import Card from './Card.js';
import cardData from '../cardData.js';

const Carousel = () => {
  const [cardRefs, setCardRefs] = useState({
    previousCard: 0,
    currentCard: 0,
    nextCard: 1
  })

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