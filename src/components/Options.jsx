import Option from "./Option"
const Options = (props)=>{




    return(
        <div>
            <button onClick={props.handleDeleteOptions} disabled={!props.hasOptions}> Remove All</button>
            
            {
             
                props.options.value.map((option)=> (
                    <Option
                     key={option}
                     optionText={option} 
                     handleDeleteOption={props.handleDeleteOption}
                     />
                     ))
            }
        </div>
    )
}

export default Options