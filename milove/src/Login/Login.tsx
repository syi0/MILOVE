import './Login.css'
import Logo from '../!images/LOGO.png'

export default function Login() {
    return (
        <div className='Login'>
            <form action="">
                <img src={Logo} alt="LOGO" /> <br />
                <label htmlFor="username">Username: </label><br /><input type="text" name="username" id="username" placeholder='Nickname' /> <br /> <br />
                <label htmlFor="password">Password: </label><br /><input type="password" name="password" id="password" placeholder='Password' /> <br /> <br />
                <button>Login</button> <br />
                <p>You don't have an account? <a href="/register"><b>Register!</b></a></p> <br />
                <a href="/"><b><i className="fa-solid fa-arrow-left"></i> Home</b></a>
            </form>
        </div>
    );
}