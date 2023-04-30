import { useState } from "react"

const AddOption = (props)=>{

    const[state, setState] = useState({
        error: undefined
    })
const handleAddOption=(e)=>{
  e.preventDefault()
  const option = e.target.elements.option.value.trim()
  const error  = props.handleAddOption(option)
  

  setState(()=>{
    return {error}
  })
 e.target.elements.option.value =""
}

    return(
      <div>
        {state.error && <p>{state.error}</p>}
        <form onSubmit={handleAddOption}>
        <input type="text" name="option"></input>
          <button>Add Option</button>

        </form>
      </div>
    )
}

export default AddOption