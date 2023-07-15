import { func } from "prop-types";
import React, { useState } from "react";
const FormValidation = () =>{

    let [user, setUser] = useState({name:"", email:"",password:"",confirmPassword:""});
    let [error, setError] = useState("")


    console.log("User",user);

    function validateForm(event){
        event.preventDefault();

        if(user.name.length < 3 || user.name.length > 30){
            return setError("Name shoud be min 3 char and max 30 char");
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            return setError("Email should contain @ and .");
        }
        else if(user.password.length < 8 || user.password.length > 15){
            return setError("Password should be min 8 char and max 15 char");
        }
        else if(user.password !== user.confirmPassword){
            return setError("Password and confirm Password should be same");
        }
    }

    return (
        <div className="detials">
            {error && <h4>{error}</h4>}
           <form onSubmit={validateForm}>
                <input type="text"placeholder="Enter Your Name" 
                    onChange={(event)=>setUser({...user, name:event.target.value})}
                />

                <input type="email"placeholder="Enter Your Email"
                    onChange={(event)=>setUser({...user, email:event.target.value})}
                />

                <input type="password" placeholder="Enter Password" 
                    onChange={(event)=>setUser({...user, password:event.target.value})}
                />

                <input type="password" placeholder="Confirm Password" 
                    onChange={(event)=>setUser({...user, password:event.target.value})}
                />

                <button type="submit">Submit</button>
           </form>
        </div>

        
    )
}

export default FormValidation;