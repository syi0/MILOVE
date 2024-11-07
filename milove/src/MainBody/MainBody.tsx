import './MainBody.css'
import Logo from '../!images/LOGO.png'

export default function MainBody() {
    return(
        <div className='MainBody'>
            <img src={Logo} alt="LOGO" /> <br />
            <a href="/register"><button>Join to MILOVE!</button></a> <br />
            <h1>Why us?</h1>
            <p>Lorem funiusbgiuyvesrbvubaiegi</p>
        </div>
    );
}