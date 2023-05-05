const Option = (props)=>{
    return(
      <div className="flex">
      <p className="option">
      {props.optionText}
      </p>
      <button  
      onClick={(e)=>{
        props.handleDeleteOption(props.optionText)
      }}
      >
      remove</button>
     
   
      </div>
    )
}

export default Option