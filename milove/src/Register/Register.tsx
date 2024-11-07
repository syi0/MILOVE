import './Register.css'
import Logo from '../!images/LOGO.png'

export default function Register() {
    return(
        <div>
            <form action="" className='Register'>
                <img src={Logo} alt="LOGO" /> <br />
                <label htmlFor="username">Username: </label><br /><input type="text" name="username" id="username" placeholder='Name'/> <br /> <br />
                <label htmlFor="email">Email: </label><br /><input type="email" name="email" id="email" placeholder='uwu@gmail.com'/><br /> <br />
                <label htmlFor="password">Password: </label><br /><input type="password" name="password" id="password" placeholder='Password123'/> <br /> <br />
                <label htmlFor="NaS">Name and Surname: </label><br /><input type="text" name="NaS" id="NaS" placeholder='Miłosz Ratkiewicz'/><br /> <br />
                <label htmlFor="age">Your age: </label><br /><input type="number" name="age" id="age" placeholder='min. 18 yo'/><br /> <br />
                <button>Register</button> <br />
                <p>You have account? <a href="/login"><b>Login!</b></a></p> <br />
                <a href="/"><b><i className="fa-solid fa-arrow-left"></i> Home</b></a>
            </form>
        </div>
    );
}