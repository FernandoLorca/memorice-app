export default function CardPattern({ cardId, flippedCardsHandler, flipped }) {
  return (
    <div
      className={`w-full border-2 border-gray-900 h-32 rounded-md text-xl md:w-28 justify-center items-center cardPattern cursor-pointer ${
        flipped ? 'hidden' : 'flex'
      }`}
      onClick={() => flippedCardsHandler(cardId)}
    ></div>
  )
}
