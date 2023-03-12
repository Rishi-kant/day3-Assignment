import Heading from "./Heading"
import Mobile from "./Mobile"
import Password from "./Password"
import SubmitBtn from "./SubmitBtn"
export default function SaperateComponents(){
    return(
        <div style={{border:'2px solid black'}}>
       <center><h1>UI in different components</h1></center>
        <Heading heading="Register here ..."/>
        <Mobile />
        <Password />
        <SubmitBtn btnText="Submit"/>
    </div>
    )
}