const Card = (props) => {
  return (
    <div
      className={`px-4 py-4 border-2 rounded-lg border-gray-200 text-gray-900 ${props.className} `}
    >
      {props.children}
    </div>
  );
};

export default Card;
