import { useState } from "react";
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";

const Indecision = () =>{
    const [options, setOption] = useState({
        value:[]
    })

    const handleDeleteOptions = ()=>{
        setOption(()=>{
           return {value:[]}
          });
    }

   const handlePick = () =>{
    const randomNum = Math.floor(Math.random()*options.value.length)
    const option = options.value[randomNum]
    alert(option)
   }

   const handleAddOption =(option)=>{
    if(!option){
        return 'Enter valid value to add item'
    }else if(options.value.indexOf(option)>-1){
        return 'This option already exists'
    }

    setOption((prevState) =>{
        return{
            value:prevState.value.concat(option)
        }
    })
  
   }
   const title = 'indecison '
   const subtitle = 'put your life in the hands of computer'
    return(
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action
            hasOptions={options.value.length>0}
           
                handlePick={handlePick}
            />
             {console.log(options.value)}
            <Options
                options={options}
                handleDeleteOptions={handleDeleteOptions}
            />
            <AddOption
            handleAddOption={handleAddOption} />
        
        </div>
    )
}
export default Indecision