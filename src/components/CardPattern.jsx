export default function CardPattern({ handleShowCard, showCard }) {
  return (
    <div
      className={`w-full h-32 rounded-md text-xl md:w-28 justify-center items-center cardPattern cursor-pointer ${
        showCard === false ? 'flex' : 'hidden'
      }`}
      onClick={handleShowCard}
    ></div>
  );
}
