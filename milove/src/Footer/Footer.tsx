import './Footer.css'

export default function () {
    return(
        <footer>
            <div className='links'>
                <a className='footerTile' href='/'>&copy;MILOVE 2024</a>
                <a href="#" className='footerTile'><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className='footerTile'><i className="fa-brands fa-square-facebook"></i></a>
                <a href="mailto:support@milove.pl" className='footerTile'> Contact us</a>
            </div>
        </footer>
    );
}