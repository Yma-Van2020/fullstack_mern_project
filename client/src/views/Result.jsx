
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";


// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation

import ChangingProgressProvider from "./ChangingProgressProvider";


const Result = () => {
   const history = useHistory()
   const {id} = useParams()
   const[score, setScore] = useState()
   const [state, setState] = useState(false)
   const circle = {
       border:"1px yellow solid", borderRadius:"50%",width:"150px", height:"150px",
       backgroundColor:"rgb(255,204,51)",
       fontSize:"50px",
       paddingTop:"40px",

    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/user",{withCredentials:true})
        .then(res => {
            setScore(res.data.moodScore[res.data.moodScore.length - 1].dailyscore)
        })
        .catch(err => console.log(err))
    }, [])

    console.log(state)
    setTimeout(() => setState(true), 1500)
    console.log(state)

    return (
        <div>
            <img src="https://cliply.co/wp-content/uploads/2019/05/371905140_MEET_ROBOT_400px.gif" alt="bot gif" />
            <div style={{width:"200px", position:"relative", left:"500px"}}>
            
            {(!state)?
            <ChangingProgressProvider values={[0, 100]}>
                {percentage => (
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                    pathTransition:
                        percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                    })}
                />
                )}
            </ChangingProgressProvider>: <div style={circle}>{id}</div>
            
            }
          </div>  
 
            <br/>
             <h1 style={{color:"black", fontFamily:"'Grechen Fuemen', cursive"}}>Keep logging for 7 days to get comprehensive analysis. <br/>The chatbot might provide some helpful resources!</h1>
             <button className="btn btn-outline-dark" onClick={() => history.push("/dashboard")}>Dashboard</button>
     </div>
    )
}

export default Result
