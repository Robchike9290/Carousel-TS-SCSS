import React from 'react';

type CardProps = {
  text: string
}

const Card: React.FunctionComponent<CardProps> = ({...props}) => {
  const {text} = props;

  return (
    <div className="Card-box">{text}</div>
  )
}

export default Card;