import '../styles/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer(){
    return(
        <>
        <div className="footer">
            <span>About</span>
            <span>Help</span>
            <span>Home</span>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <CopyrightIcon/>
        </div>
        </>
    )
}
 