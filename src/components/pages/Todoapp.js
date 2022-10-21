import { getDatabase, ref, update } from "firebase/database";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import Btn from "../Btn";
import app from "../config/fbconfigs";
import { Button } from "@mui/material";

export default function Todoapp() {

    let location = useLocation()
    let [tasks, settasks] = useState('')
    let [tasklist, settasklist] = useState([])
    let bb
    let c
    let [totasks, settotasks] = useState(0)
    const database = getDatabase(app)
    
    
function checktasks(){ 
       if(location.state.user.tasks !== 0 && location.state.user.tasks !== []){
    settasklist(location.state.user.tasks)
    }else{
        location.state.user.tasks = tasklist
    }
}

useEffect(()=>{
    checktasks()
},[])

    function abc(e) {
        settasks(e.target.value)
    }

    function add(e) {
        if (tasks !== '')
            tasklist.push(tasks)
        settasklist([...tasklist])

        settasks('')

        tasklist.push(tasks)

        if (tasks !== '') {
            if (e !== false) {
                settotasks(++totasks)
            }
        }


        update(ref(database, `users/${location.state.user.userid}`), {tasklist})

    }

    function edit(id) {
        let elem
        bb = prompt('Enter')
        tasklist.filter((x, i) => {

            if (i == id) {

                if (bb !== undefined && bb !== null && bb !== '' && bb !== ' ') {
                    elem = i
                    tasklist[elem] = bb
                    add(false)
                }
            } else {
                tasklist[elem] = x
            }

            update(ref(database, `users/${location.state.user.userid}/tasks`), {tasklist})

        })


    }

    function del(id) {
        settasklist((tasklist) => {
            return tasklist.filter((elem, i) => {
                return i !== id
            })
        })
        settotasks(--totasks)
        update(ref(database, `users/${location.state.user.userid}/tasks`), {tasklist})
    }

    function delall() {
        settasklist([])
        settotasks(0)
        update(ref(database, `users/${location.state.user.userid}/tasks`), {tasklist})
    }




    return (





<>
                <h2 className='head'>ToDo App</h2>

                <div className='inpbox'>

                    <input className='inp' value={tasks} onChange={(a) => { return abc(a) }} required />

                    <span>Enter Task</span>
                    <div className='dd'></div>

                    <Btn func={add} classes='btn1' html='Add Task' />
                    <Btn func={delall} classes='btn1' html='Delete All' />
                </div>
                <h3>Tasks: {totasks}</h3>

                <div>
                    <ul>
                        {tasklist.map((x, index) => {
                            c = x
                            return (<div key={index}>
                                <li>{x}</li>
                                <Btn func={() => edit(index)} classes='btn2' html='Edit' />
                                <Btn func={() => del(index)} classes='btn2' html='Delete' />
                            </div>)
                        })
                        }


                    </ul>
                </div>
</>
    )

}