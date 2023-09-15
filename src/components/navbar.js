import './navbar.css';
import Logo from '../logo.jpg';

export default function navbar(){
    return <nav className="nav">
        <img src= {Logo} className="site-title" alt="logo"></img>
        <ul className="nav-list">
            <li>
            <a href="/" className="home"><h3>Home</h3></a>
            </li>
            <li>
            <a href="/about" className="about"><h3>About</h3></a>
            </li>
            {/* <li>
            <a href="/menu" className="menu"><h3>Menu</h3></a>
            </li> */}
            <li>
            <a href="/help" className="help"><h3>Help</h3></a>
            </li>
            <li>
            <a href="/product" className="product"><h3>Product</h3></a>
            </li>
        </ul>
    </nav>
}



