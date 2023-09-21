export default function Card({
  cardId,
  flippedCardsHandler,
  cardContent,
  flipped,
}) {
  return (
    <div
      className={`border-2 border-gray-900 w-32 h-40 rounded-md text-4xl flex justify-center items-center cursor-pointer bg-gray-950 ${
        flipped ? 'flex' : 'hidden'
      }`}
      onClick={() => flippedCardsHandler(cardId)}
    >
      {cardContent}
    </div>
  )
}
