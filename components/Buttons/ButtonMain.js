export default function ButtonMain({
  backgroundColor,
  textColor,
  buttonText,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-${backgroundColor} text-${textColor} border-2 border-color-primary-light hover:bg-teal-darkest hover:text-white font-bold py-2 rounded w-20 sm:w-28 ml-2 bg-${backgroundColor}`}
    >
      {buttonText}
    </button>
  )
}
