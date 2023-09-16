export default function Card({ handleShowCard, showCard }) {
  return (
    <div
      className={`w-full border h-32 rounded-md text-xl md:w-28 flex justify-center items-center cursor-pointer ${
        showCard === true ? 'flex' : 'hidden'
      }`}
      onClick={handleShowCard}
    >
      😎
    </div>
  );
}
