import {  Container, Grid } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import {auth,provider} from '../firebase'
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
    const HandleClick=()=>{
        console.log("Button is clicked")

    
    signInWithPopup(auth,provider).then(result=>{
        const username=result.user.displayName
        console.log(username)
     navigate('/Home',{
        state:{
            username,
        }
     })
    }).catch((error)=>{
        console.log(error)
    })
}

return (

<>

<Container>

<Grid

alignItems="center"

justifyContent="center"

container

sx={{ height: "100vh" }}

>

<Grid item>

<button

style={{

height: "40px",

backgroundColor: "#1976d2",

color: "#fff",

border: "none",

borderRadius: "5px",

fontSize: "25px",

padding: "5px",

display: "flex",

justifyContent: "center",

alignItems: "center",


}}
onClick={HandleClick}

>

<GoogleIcon sx={{ mr: 5 }} />

<span>Signin with Google</span>

</button>

</Grid>

</Grid>

</Container>

</>

);

};

export default Login;