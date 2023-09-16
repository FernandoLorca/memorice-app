import { useState } from 'react';
import Card from './Card';
import CardPattern from './CardPattern';

export default function CardGrid() {
  const [showCard, setShowCard] = useState(false);

  const handleShowCard = () => setShowCard(!showCard);
  return (
    <section className="grid grid-cols-5 px-3 grid-rows-4 place-items-center gap-2 md:gap-y-10">
      <div>
        <CardPattern
          handleShowCard={handleShowCard}
          showCard={showCard}
        />
        <Card
          handleShowCard={handleShowCard}
          showCard={showCard}
        />
      </div>
    </section>
  );
}
