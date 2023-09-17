export default function Card({ handleShowCard, cardContent, flipped }) {
  return (
    <div
      className={`w-full border h-32 rounded-md text-xl md:w-28 justify-center items-center cursor-pointer ${
        flipped ? 'flex' : 'hidden'
      }`}
      onClick={handleShowCard}
    >
      {cardContent}
    </div>
  )
}
