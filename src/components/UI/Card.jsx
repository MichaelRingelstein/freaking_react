const Card = (props) => {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden text-gray-900 ${props.className} `}
    >
      {props.children}
    </div>
  );
};

export default Card;
