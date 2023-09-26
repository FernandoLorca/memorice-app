export default function CardPattern({
  cardId,
  flippedCardsHandler,
  selectedCards,
  setSelectedCards,
  flipped,
  cardMatched,
}) {
  return (
    <div
      className={`w-32 h-40 border-2 rounded-md border-gray-900 cursor-pointer ${
        cardMatched ? 'matched' : 'cardPattern'
      } ${flipped ? 'hidden' : 'flex'}`}
      onClick={() => {
        setSelectedCards([...selectedCards, cardId])
        flippedCardsHandler(cardId)
      }}
    ></div>
  )
}
