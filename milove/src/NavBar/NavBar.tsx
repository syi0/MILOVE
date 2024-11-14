import './NavBar.css'

export default function NavBar() {
    return(
        <nav>
            <ul>
                <li><a href="/">Home <i className="fa-solid fa-house"></i></a></li>
                <li><a href="/social">Find your miLove! <i className="fa-regular fa-heart"></i></a></li>
                <li><a href="/login" className='active'>Login <i className="fa-solid fa-user"></i></a></li>
            </ul>
        </nav>
    );
}