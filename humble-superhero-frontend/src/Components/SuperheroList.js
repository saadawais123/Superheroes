import React from 'react';

export default function SuperheroList({ superheroes }) {
  return (
    <ul>
      {superheroes.map((hero, index) => (
        <li key={index} className="border p-2 mt-2">
          {hero.name} - {hero.superpower} (Humility: {hero.humility})
        </li>
      ))}
    </ul>
  );
}
