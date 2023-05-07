import { useState } from "react";
const AddOption = ({ onOptionAdd }) => {
  const [value, setValue] = useState("");

  const handleAddOption = (e) => {
    e.preventDefault();
    onOptionAdd(value);
    setValue("")

  };

  return (
    <div>
      <form onSubmit={handleAddOption}>
        <input type="text" name="option" value={value} onChange={e => {setValue(e.target.value)}}></input>
        <button disabled={!value.length}>Add Option</button>
      </form>
    </div>
  );
};

export default AddOption;
