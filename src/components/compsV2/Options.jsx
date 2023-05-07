import Option from './Option';
const Options = ({options, disabled, onRemove, onRemoveAll}) => {
  return (
    <div>
      <button onClick={onRemoveAll} disabled={disabled}>
        {' '}
        Remove All
      </button>

      {options.map((option, index) => (
        <Option
          key={`option-${index}`}
          id={index}
          content={option}
          onDelete={onRemove}
        />
      ))}
    </div>
  );
};

export default Options;
