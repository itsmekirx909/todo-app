import { useState } from "react";
import Logform from "../Logform";
import Signform from "../Signform";


export default function Log(){
    let [checker, setchecker] = useState(true)
    return(
<>
        {checker?
            <>
<Logform/>
<div className="logsig">Not a member yet? <span className="sign" onClick={()=>{setchecker(false)}}>Sign Up</span></div>
            </>
        :
        <>
<Signform/>
<div className="logsig">Have an account? <span className="sign" onClick={()=>{setchecker(true)}}>Sign in</span></div>
        </>
            }


        </>
    )
}