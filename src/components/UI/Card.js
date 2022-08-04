const Card = (props) => {
  return (
    <div
      className={`rounded px-4 py-4 bg-gray-100 mt-8 text-gray-900 ${props.className} `}
    >
      {props.children}
    </div>
  );
};

export default Card;
