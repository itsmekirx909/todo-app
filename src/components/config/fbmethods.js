import app from "./fbconfigs";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";


//SignUP
const auth =getAuth(app)
const database = getDatabase(app)
const abc = 321

let signup = (email, password, username, tasks)=>{
    let userid
   return new Promise((resolve, reject)=>{
    let userObj = {
        email: email,
        password: password,
        username: username,
        userid: userid,
        tasks: tasks
    }
       createUserWithEmailAndPassword(auth, email, password)
.then((userCreds)=>{
    const user = userCreds.user

    let reference = ref(database, `users/${user.uid}`)
    userid = user.uid

    set(reference, userObj)
    .then(()=>{
        
        resolve(userObj)
    })
    .catch(()=>{
        reject('Error from database')
    })

})

.catch(()=>{
    reject('Error')
})

    })
}


//Login

let login = (email, password)=>{
   return new Promise((resolve, reject)=>{

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            const reference = ref(database, `users/${user.uid}`)

            onValue(reference, (userdata)=>{
                let userstatus = userdata.exists()
                if(userstatus){
                    resolve(userdata.val())
                }
                else{
                    reject('User not found')
                }
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            reject(error)
        })


    })
}


export {signup, login}