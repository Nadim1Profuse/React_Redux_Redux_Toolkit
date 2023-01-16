import React from "react"

const Button=(props)=>{
    return(
        <button onClick={props.onClick} style={{margin:"2rem"}} class="ui inverted primary button">{props.name}</button>
    )
}

export default Button;