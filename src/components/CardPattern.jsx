export default function CardPattern({ cardId, flippedCardsHandler, flipped }) {
  return (
    <div
      className={`w-32 h-40 border-2 rounded-md border-gray-900 cardPattern ${
        flipped ? 'hidden' : 'flex'
      }`}
      onClick={() => flippedCardsHandler(cardId)}
    ></div>
  )
}
