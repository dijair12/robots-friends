import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

  return (
    <div>
      {
        robots.map((user, indice) => {
          return (
            <Card
              key={indice}
              id={robots[indice].id}
              name={robots[indice].name}
              email={robots[indice].email}
            />
          )
        })
      }
    </div>
  )
}

export default CardList;