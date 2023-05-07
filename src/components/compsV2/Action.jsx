const Action = ({ onClick, disabled }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        What should I do?
      </button>
    </div>
  );
};
export default Action;
