import './MainBody.css'
import Logo from '../!images/LOGO.png'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar'

export default function MainBody() {
    return(
        <div className='MainBody'>
            <NavBar />
            <img src={Logo} alt="LOGO" /> <br />
            <a href="/register"><button>Join to MILOVE!</button></a> <br />
            <h1>Why us?</h1>
            <p>MILOVE is designed to help you find real connections with ease.<br/> Our smart matching system pairs you with people who share your interests and values, making it simpler to meet like-minded singles.<br/> With a user-friendly platform and a diverse community, MILOVE makes online dating enjoyable and effective.</p>
            <Footer />
        </div>
        
    );
}