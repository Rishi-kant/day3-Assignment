

function Heading(props){
    return(
     <h1>{props.heading}</h1>
    )
}
function Mobile(){
    return(
        <input placeholder="mobile ..."/>
    )
}
function Password(){
    return(
      <p> <input placeholder="password ..."/></p>
    )
}
function SubmitBtn(props){
    return(
      <p><button>{props.btnText}</button></p>
    )
}

export default function OneFile() {
return(
    <div style={{border:'2px solid black'}}>
        <Heading heading="Register here ..."/>
        <Mobile />
        <Password />
        <SubmitBtn btnText="Submit"/>
    </div>
)
}