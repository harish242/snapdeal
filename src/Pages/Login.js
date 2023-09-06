import {  Container, Grid } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import {auth,provider} from '../firebase'
import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { CartState } from "../component/Home";

const Login = () => {
    const{setUser,navigate}=CartState();
    // const navigate=useNavigate()
    console.log(navigate)
    const HandleClick=()=>{
        // console.log("Button is clicked")    
    signInWithPopup(auth,provider).then(result=>{
        
        const username=result.user.displayName
        setUser(result.user.displayName)
        console.log('lgin/18',result)
    //  navigate('/Home',{
    //     state:{
    //         username,
    //     }
    //  })
    navigate('/Home')
    }).catch((error)=>{
        console.log(error)
    })
}

return (

<>

<Container style={{backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundImage:"url('https://image.slidesharecdn.com/snapdeal-150225105139-conversion-gate01/75/snapdealcom-1-2048.jpg?cb=1666225125')"}}>
    {/* <h1>Welcome to SnapDeal</h1> */}
    {/* <div style={{height:'300px',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundImage:"url('https://image.slidesharecdn.com/snapdeal-150225105139-conversion-gate01/75/snapdealcom-1-2048.jpg?cb=1666225125')"}}> */}
        {/* // <img src=/> */}
    {/* </div> */}

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
position:'relative',
top:'220px'


}}
onClick={HandleClick}

>

<GoogleIcon sx={{ mr: 3,}} />

<span>Signin with Google</span>

</button>

</Grid>

</Grid>

</Container>

</>

);

};


export default Login;