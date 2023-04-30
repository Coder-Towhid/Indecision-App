import Option from "./Option"
const Options = (props)=>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}> Remove All</button>
            
            {
             
                props.options.value.map((option)=> <Option key={option} optionText={option}/>)
            }
        </div>
    )
}

export default Options