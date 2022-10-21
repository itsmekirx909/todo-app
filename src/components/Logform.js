import { Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Btn from "./Btn"
import { login } from "./config/fbmethods"



export default function Logform(){
let [em, setem] = useState('')
let [paw, setpaw] = useState('')
let navigate = useNavigate()
let [wrong, setwrong] = useState()
let [invalid, setinvalid] = useState()

    function email(e){
    setem(e.target.value)
    }
    
    function pw(e){
        setpaw(e.target.value)
    }
    
    function loginuser(){
login(em,paw)
.then((success)=>{
    navigate('/todoapp',
    {
        state: {
            user: success
        }
    })
})
.catch((error)=>{
        setinvalid('Invalid Email or Password')
        setTimeout(() => {
            setinvalid('')
        }, 4000)
})
    }





    return(
        <>
        <h5 className='head'>Login</h5>

        <div className='inpbox'>
        <input className='inp' onChange={(a) => { return email(a) }} required />
        <span>Enter Email</span>
        </div>        
        
         <div className='inpbox'>
        <input className='inp' type='password' onChange={(a) => { return pw(a) }} required />
        <span>Enter Password</span>
        </div>        

<div>
        <Btn func={loginuser} classes='btn1' key={1} html='Login' />
        <br/>
        <Typography sx={{pointerEvents: 'none'}} variant="p" fontSize='15px' color='error'>{invalid}</Typography>
</div>
        
        </>

    )
}