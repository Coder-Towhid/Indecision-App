const Option = ({ content, id, onDelete }) => {
  return (
    <div className="flex">
      <p className="option">{content}</p>
      <button onClick={() => onDelete(id)}>remove</button>
    </div>
  );
};

export default Option;
