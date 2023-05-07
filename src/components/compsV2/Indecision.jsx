import React, { useState } from 'react';
import Header from '../Header';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';
import Options from './Options';

const title = 'Indecison ';
const subtitle = 'Put your life in the hands of computer';

const Indecision2 = () => {
  // list of options
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  // can add option
  const addOption = (option) => {
    setOptions((prev) =>  Array.from(new Set( [...prev, option]) ));
  };

  // can remove option
  const removeOption = (index) => {
    const newState = [...options];
    newState.splice(index, 1);
    setOptions(()=> newState) 
  };

  // can remove all options
  const removeAllOptions = () => {
    setOptions([]);
  };

  // random pick
  const selectRandom = () => {
    const index = Math.floor(Math.random() * options.length);
    setSelectedOption(index)
    
  };

  // clear random pick
  const clearRandom = () => {
    setSelectedOption(null)
    
  };

  const handleModalConfirmation = ()=>{
    removeAllOptions()
    clearRandom()
  }

  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <Action onClick={selectRandom} disabled={!options.length} />

      <Options
        options={options}
        disabled={!options.length}
        onRemove={removeOption}
        onRemoveAll={removeAllOptions}
      />

      <AddOption onOptionAdd={addOption} />
      <OptionModal
        option={options[selectedOption]}
        id={selectedOption}
        isOpen={selectedOption !== null}
        onConfirm={handleModalConfirmation}
      />
    </div>
  );
};

export default Indecision2;
