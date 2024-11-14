import { useSelector } from 'react-redux';
import './Homepage.css'
import SideNav from './SideNav';
import TimeLine from './TimeLine';

export default function Homepage() {
    console.log(useSelector((state) => state));
    
    return(
        <div className='homepage'>
            <div className='homepage_nav'><SideNav/></div>
            <div className="homepage_timeline"><TimeLine/></div>

            
            <a href="/">Home</a>
        </div>
    );
}
