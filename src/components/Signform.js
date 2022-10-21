import { Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Btn from "./Btn"
import { signup } from "./config/fbmethods"



export default function Signform(){
    let [em, setem] =useState('')
    let [user, setuser] =useState('')
    let [paw1, setpaw1] =useState('')
    let [paw2, setpaw2] =useState('')
    let tasks = 0
    let [invalid, setinvalid] = useState()
    let navigate = useNavigate()

    function email(e){
    setem(e.target.value)
    }
    
    function username(e){
        setuser(e.target.value)
    }
    
    
    function pw1(e){
        setpaw1(e.target.value)
    }
    
    function pw2(e){
        setpaw2(e.target.value)
    }
    
    function signUp(){

    if(paw1 === paw2){

        signup(em, paw1, user, tasks)
        .then((made) => {
            navigate('/todoapp',
            {
                state: {
                    user: made
                }
            })
          })
          .catch((error) => {
            setinvalid('Invalid Email or Password')
            setTimeout(() => {
                setinvalid('')
            }, 4000);
          })

    }else{
        setinvalid('Passwords Must Be Same')
        setTimeout(() => {
            setinvalid('')
        }, 4000);
    }

    }


    return(
        <>
        <h5 className='head'>Sign Up</h5>

        <div className='inpbox'>
        <input className='inp' onChange={(a) => { return email(a) }} required />
        <span>Enter Email</span>
        </div>      

                <div className='inpbox'>
        <input className='inp' onChange={(a) => { return username(a) }} required />
        <span>Enter Username</span>
        </div>     
        
         <div className='inpbox'>
        <input className='inp' type='password' onChange={(a) => { return pw1(a) }} required />
        <span>Enter Password</span>
        </div>        

        <div className='inpbox'>
        <input className='inp' type='password' onChange={(a) => { return pw2(a) }} required />
        <span>Confirm Password</span>
        </div>        


        <Btn func={signUp} classes='btn1' key={1} html='Sign Up' />
        <br/>
        <Typography sx={{pointerEvents: 'none'}} variant="p" fontSize='15px' color='error'>{invalid}</Typography>

        
        </>

    )
}