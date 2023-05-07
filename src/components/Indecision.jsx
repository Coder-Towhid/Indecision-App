import { useState } from "react";
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import OptionModal from "./OptionModal";
import Options from "./Options";

const Indecision = () =>{
    const [options, setOption] = useState({
        value:[],
        selectedOption: undefined
    })

    const handleDeleteOptions = ()=>{
        setOption({value:[]})
    }

    const handleDeleteOption = (optionRemove)=>{

       

        setOption({value: options.value.filter((option)=>{
            return optionRemove !==  option
            
        })})
       
     
        
    }


   const handlePick = () =>{
    const randomNum = Math.floor(Math.random()*options.value.length)
    const option = options.value[randomNum]
    setOption(() => ({
        ...options,
        selectedOption: option,
      }));
   }

   const clearSelectedOption = ()=>{
    
    
    setOption(() => ({
        ...options,
        selectedOption: undefined,
      }));
   }
   

   const handleAddOption =(option)=>{
    if(!option){
        return 'Enter valid value to add item'
    }else if(options.value.indexOf(option)>-1){
        return 'This option already exists'
    }

    setOption(() =>({
        value:options.value.concat(option)
    }))
     
  
   }
   const title = 'Indecison '
   const subtitle = 'Put your life in the hands of computer'
    return(
        <div>
            <Header title={title} subtitle={subtitle} />
         
            <Action
          
                hasOptions={options.value.length>0}
           
                handlePick={handlePick}
            />
             {console.log(options.value)}
            <Options
                hasOptions={options.value.length>0}
                options={options}
                handleDeleteOptions={handleDeleteOptions}
                handleDeleteOption={handleDeleteOption}/>
            <AddOption
            handleAddOption={handleAddOption} />
            <OptionModal 
                selectedOption={options.selectedOption}
                clearSelectedOption={clearSelectedOption}
                handleDeleteOptions={handleDeleteOptions}
            />
        </div>
    )
}
export default Indecision